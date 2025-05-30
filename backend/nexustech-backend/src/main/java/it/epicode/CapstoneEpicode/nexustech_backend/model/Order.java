package it.epicode.CapstoneEpicode.nexustech_backend.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import it.epicode.CapstoneEpicode.nexustech_backend.model.OrderItem;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne; // Se gli ordini sono collegati a un utente
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDateTime;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonManagedReference; // Per evitare loop JSON

@Entity
@Table(name = "orders") // Nome della tabella nel database
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime orderDate; // Data e ora dell'ordine/preventivo

    @Column(nullable = false)
    private Double totalPrice; // Prezzo totale dell'ordine

    @Column(nullable = false)
    private String status; // Stato dell'ordine (es. "Pending", "Confirmed", "Completed")

    // Relazione Uno a Molti: Un ordine può avere molti OrderItem
    // CascadeType.ALL: Le operazioni su Order si propagano agli OrderItem associati
    // orphanRemoval = true: Rimuove gli OrderItem orfani (non più associati a un ordine)
    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference // Per evitare loop infiniti quando serializzi Order
    private List<OrderItem> items; // Lista degli elementi dell'ordine

    // Relazione Molti a Uno: Un ordine appartiene a un utente (opzionale, se gestisci utenti clienti)
    // Se vuoi collegare ogni ordine a un utente loggato, puoi scommentare questo.
    // Per ora, lo lasciamo commentato per semplicità se i clienti non sono registrati.
    // @ManyToOne
    // @JoinColumn(name = "user_id") // Colonna che fa da chiave esterna verso la tabella users
    // private User user; // L'utente che ha effettuato l'ordine

    @PrePersist // Esegue questo metodo prima che l'entità venga persistita per la prima volta
    protected void onCreate() {
        this.orderDate = LocalDateTime.now(); // Imposta la data di creazione automaticamente
    }
}