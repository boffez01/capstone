package it.epicode.CapstoneEpicode.nexustech_backend.repository; // <<< ASSICURATI CHE IL PACKAGE SIA CORRETTO

import it.epicode.CapstoneEpicode.nexustech_backend.model.User; // <<< ASSICURATI CHE L'IMPORT DI USER SIA CORRETTO
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional; // Per findByUsername, che restituisce un Optional

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Metodo personalizzato per trovare un utente tramite username
    // Spring Data JPA lo implementerà automaticamente
    Optional<User> findByUsername(String username);
}