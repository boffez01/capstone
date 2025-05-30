package it.epicode.CapstoneEpicode.nexustech_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.persistence.PrePersist;

import java.time.LocalDateTime;

@Entity
@Table(name = "contact_messages") // Nome della tabella nel database
@Data // Getter, Setter, toString, equals, hashCode
@NoArgsConstructor // Costruttore senza argomenti
@AllArgsConstructor // Costruttore con tutti gli argomenti
public class ContactMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name; // Nome completo del mittente

    @Column(nullable = false)
    private String email; // Email del mittente

    @Column(nullable = false)
    private String subject; // Oggetto del messaggio (lo hai nel frontend)

    @Column(nullable = false, length = 1000) // Lunghezza massima per il messaggio
    private String message; // Contenuto del messaggio

    @Column(nullable = false)
    private LocalDateTime submissionTime; // Data e ora di invio del messaggio

    // Costruttore personalizzato per impostare submissionTime automaticamente
    @PrePersist // Esegue questo metodo prima che l'entità venga persistita per la prima volta
    protected void onCreate() {
        this.submissionTime = LocalDateTime.now();
    }
}