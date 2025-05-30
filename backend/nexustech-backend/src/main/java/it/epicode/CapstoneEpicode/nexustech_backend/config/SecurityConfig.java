// SecurityConfig.java - VERSIONE FINALE CON anonymous().disable()

package it.epicode.CapstoneEpicode.nexustech_backend.config;

import it.epicode.CapstoneEpicode.nexustech_backend.security.JwtAuthenticationFilter;
import it.epicode.CapstoneEpicode.nexustech_backend.service.CustomUserDetailsService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.boot.autoconfigure.security.servlet.PathRequest;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.http.HttpStatus;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;


import java.util.Arrays;
import java.util.List;


@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {

 @Autowired
 private CustomUserDetailsService customUserDetailsService;

 @Autowired
 private JwtAuthenticationFilter jwtAuthenticationFilter;

 @Bean
 public PasswordEncoder passwordEncoder() {
  return new BCryptPasswordEncoder();
 }

 @Bean
 public DaoAuthenticationProvider authenticationProvider() {
  DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
  authProvider.setUserDetailsService(customUserDetailsService);
  authProvider.setPasswordEncoder(passwordEncoder());
  return authProvider;
 }

 @Bean
 public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
  return config.getAuthenticationManager();
 }

 @Bean
 public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
  http
          .csrf(csrf -> csrf.disable())
          .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
          .cors(cors -> cors.configurationSource(corsConfigurationSource()))
          .authorizeHttpRequests(authorize -> authorize
                  .requestMatchers("/api/auth/**").permitAll()
                  .requestMatchers(PathRequest.toStaticResources().atCommonLocations()).permitAll()
                  .requestMatchers("/api/admin/**").hasRole("ADMIN")
                  .anyRequest().permitAll()
          )
          .httpBasic(httpBasic -> httpBasic.disable())
          .exceptionHandling(exception -> exception
                  .authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED))
                  .accessDeniedHandler((request, response, accessDeniedException) -> {
                   response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access denied");
                  })
          )
          // *** LA MODIFICA CHIAVE: Disabilita ESPLICITAMENTE l'autenticazione anonima ***
          //.anonymous(anonymous -> anonymous.disable()) // <-- QUESTA RIGA DEVE ESSERE QUI E FUNZIONARE ALL'AVVIO
          // Posiziona il filtro JWT al posto del filtro di autenticazione username/password standard.
          // Con anonymous disabilitato, questo dovrebbe funzionare senza problemi di sovrascrittura.
          .addFilterAt(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

  return http.build();
 }

 @Bean
 CorsConfigurationSource corsConfigurationSource() {
  CorsConfiguration configuration = new CorsConfiguration();
  configuration.setAllowedOrigins(List.of("http://localhost:5173"));
  configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
  configuration.setAllowedHeaders(List.of("*"));
  configuration.setAllowCredentials(true);
  UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
  source.registerCorsConfiguration("/**", configuration);
  return source;
 }
}