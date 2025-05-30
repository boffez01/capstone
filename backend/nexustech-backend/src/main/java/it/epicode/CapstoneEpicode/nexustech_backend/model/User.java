package it.epicode.CapstoneEpicode.nexustech_backend.model; // <<< ASSICURATI CHE IL PACKAGE SIA CORRETTO

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "users") // Nome della tabella nel database
@Data // Genera automaticamente getter, setter, toString, equals e hashCode (da Lombok)
@NoArgsConstructor // Genera un costruttore senza argomenti (da Lombok)
@AllArgsConstructor // Genera un costruttore con tutti gli argomenti (da Lombok)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password; // Questa sarà la password hashata!

    // Set di ruoli per l'utente (es. ADMIN, USER)
    @ElementCollection(fetch = FetchType.EAGER) // Carica i ruoli insieme all'utente
    @Enumerated(EnumType.STRING) // Salva i ruoli come stringhe nel DB (es. "ROLE_ADMIN")
    private Set<Role> roles; // Definiamo l'enum Role tra poco
}