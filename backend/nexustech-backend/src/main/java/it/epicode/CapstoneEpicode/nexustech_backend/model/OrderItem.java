package it.epicode.CapstoneEpicode.nexustech_backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonBackReference; // Per evitare loop JSON

@Entity
@Table(name = "order_items") // Nome della tabella nel database
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Collego l'OrderItem a un Container specifico
    @ManyToOne
    @JoinColumn(name = "container_id", nullable = false) // Colonna che fa da chiave esterna verso la tabella containers
    private Container container; // Il tipo di container ordinato

    @Column(nullable = false)
    private Integer quantity; // Quantità di quel container

    @Column(nullable = false)
    private Double unitPrice; // Prezzo unitario del container al momento dell'ordine

    // Relazione Molti a Uno: Molti OrderItem appartengono a un singolo Order
    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false) // Colonna che fa da chiave esterna verso la tabella orders
    @JsonBackReference // Evita loop infiniti quando serializzi OrderItem
    private Order order; // L'oggetto Order a cui questo elemento appartiene
}