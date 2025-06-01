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
    private String title;

    @Column(nullable = false)
    private String type;

    @Column(nullable = false)
    private Double price;

    @Column(length = 500)
    private String description;

    @Column
    private String imageUrl;

    @Column
    private String condition;

    @Column
    private String size;

    @Column
    private String productionYear;

    @Column
    private String deliveryTime;

    @Column(nullable = false)
    private Boolean ready;
}