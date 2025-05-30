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

@Entity
@Table(name = "containers")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Container {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title; // <-- AGGIUNTO: Titolo completo del container (es. "Container 20 piedi usato")

    @Column(nullable = false)
    private String type; // Campo esistente, usato per la tipologia (es. "Standard", "High Cube", "WC e lavabo")

    @Column(nullable = false)
    private Double price;

    @Column(length = 500) // Ho aggiunto un limite di lunghezza per la descrizione, puoi cambiarlo
    private String description;

    @Column
    private String imageUrl;

    @Column // <-- AGGIUNTO: Condizione (es. "Nuovo", "Usato")
    private String condition;

    @Column // <-- AGGIUNTO: Dimensione (es. "10 piedi", "20 piedi", "40 piedi", "45 piedi")
    private String size;

    @Column // <-- AGGIUNTO: Anno di produzione
    private String productionYear;

    @Column // <-- AGGIUNTO: Tempi di consegna
    private String deliveryTime;

    @Column(nullable = false) // <-- AGGIUNTO: Indica se è in pronta consegna
    private Boolean ready; // Usare Boolean per default null, o impostare default false nel @PrePersist se vuoi
}