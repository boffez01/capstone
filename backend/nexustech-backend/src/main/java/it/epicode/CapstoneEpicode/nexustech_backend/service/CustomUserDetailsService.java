package it.epicode.CapstoneEpicode.nexustech_backend.service; // <<< ASSICURATI CHE IL PACKAGE SIA CORRETTO

import it.epicode.CapstoneEpicode.nexustech_backend.model.User; // Importa la tua entità User
import it.epicode.CapstoneEpicode.nexustech_backend.repository.UserRepository; // Importa il tuo UserRepository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.security.core.authority.SimpleGrantedAuthority; // Per mappare i ruoli

import java.util.stream.Collectors; // Per stream dei ruoli

@Service // Indica che questa è una componente Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    // Questo metodo è chiamato da Spring Security quando tenta di autenticare un utente
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // Cerca l'utente nel tuo database tramite l'username
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Utente non trovato con username: " + username));

        // Costruisci l'oggetto UserDetails che Spring Security si aspetta
        // Mappa i ruoli dell'utente in SimpleGrantedAuthority
        return new org.springframework.security.core.userdetails.User(
                user.getUsername(),
                user.getPassword(), // La password deve essere già hashata nel DB
                user.getRoles().stream()
                        .map(role -> new SimpleGrantedAuthority(role.name())) // Mappa i tuoi enum Role in SimpleGrantedAuthority
                        .collect(Collectors.toSet())
        );
    }
}