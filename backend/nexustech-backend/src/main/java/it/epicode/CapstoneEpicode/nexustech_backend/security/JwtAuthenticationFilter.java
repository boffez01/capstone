package it.epicode.CapstoneEpicode.nexustech_backend.security;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.client.HttpClientErrorException; // Importa questa classe!
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.http.HttpStatus; // Importa HttpStatus per l'eccezione

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {

        final String authHeader = request.getHeader("Authorization");
        String jwt = null;
        String username = null;

        // Log iniziali per debug
        System.out.println("DEBUG JWT Filter: Request URI: " + request.getRequestURI());
        System.out.println("DEBUG JWT Filter: Authorization Header RAW: '" + authHeader + "'");
        System.out.println("DEBUG JWT Filter: Authorization Header Length: " + (authHeader != null ? authHeader.length() : 0));

        // 1. Estrai il token JWT dall'header Authorization
        // Controlla se l'header è presente e inizia con "Bearer " (case-insensitive)
        if (authHeader != null && authHeader.toLowerCase().startsWith("bearer ")) {
            jwt = authHeader.substring(7).trim(); // Estrai il token e rimuovi spazi extra
            System.out.println("DEBUG JWT Filter: Extracted JWT: '" + jwt + "'");
        } else {
            System.out.println("DEBUG JWT Filter: No JWT token found or invalid format (missing 'Bearer ' prefix). Proceeding filter chain.");
            filterChain.doFilter(request, response); // Prosegui la catena se non c'è un token valido
            return; // Esci dal filtro
        }

        // 2. Se il token è stato estratto, tenta di autenticare l'utente
        if (jwt != null && !jwt.isEmpty()) {
            try {
                username = jwtUtils.extractUsername(jwt);
                System.out.println("DEBUG JWT Filter: Authenticating user: " + username);

                // Se l'username è presente e l'utente non è già autenticato nel contesto di sicurezza
                if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UserDetails userDetails = userDetailsService.loadUserByUsername(username);
                    System.out.println("DEBUG JWT Filter: User roles: " + userDetails.getAuthorities());

                    // Valida il token
                    if (jwtUtils.isTokenValid(jwt, userDetails)) {
                        UsernamePasswordAuthenticationToken authentication =
                                new UsernamePasswordAuthenticationToken(
                                        userDetails,
                                        null,
                                        userDetails.getAuthorities());
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                        SecurityContextHolder.getContext().setAuthentication(authentication);
                        System.out.println("DEBUG JWT Filter: Authentication set successfully for user: " + username);
                    } else {
                        System.err.println("DEBUG JWT Filter: JWT token is invalid for user: " + username + ". Throwing Unauthorized.");
                        // Se il token non è valido (es. firma errata), lancia Unauthorized
                        throw new HttpClientErrorException(HttpStatus.UNAUTHORIZED, "Invalid JWT Token");
                    }
                } else {
                    System.out.println("DEBUG JWT Filter: Username is null or user already authenticated. Skipping authentication process in filter.");
                }

            } catch (HttpClientErrorException e) {
                // Cattura specificamente HttpClientErrorException per rilanciarla
                System.err.println("DEBUG JWT Filter: HttpClientErrorException during authentication: " + e.getMessage());
                response.sendError(e.getStatusCode().value(), e.getMessage()); // Invia l'errore HTTP appropriato
                return; // Esci dal filtro
            } catch (Exception e) {
                // Cattura altre eccezioni (es. UsernameNotFoundException da userDetailsService)
                System.err.println("DEBUG JWT Filter: Generic error during authentication: " + e.getMessage());
                // Lancia Unauthorized per qualsiasi altro errore di autenticazione
                response.sendError(HttpStatus.UNAUTHORIZED.value(), "Authentication failed: " + e.getMessage());
                return; // Esci dal filtro
            }
        } else {
            System.out.println("DEBUG JWT Filter: JWT is null or empty after extraction. Proceeding filter chain.");
        }

        filterChain.doFilter(request, response); // Prosegui la catena di filtri
    }
}