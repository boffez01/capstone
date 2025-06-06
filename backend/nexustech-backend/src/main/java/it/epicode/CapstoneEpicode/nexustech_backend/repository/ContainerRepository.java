package it.epicode.CapstoneEpicode.nexustech_backend.repository;

import it.epicode.CapstoneEpicode.nexustech_backend.model.Container; // Importa la classe Container
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ContainerRepository extends JpaRepository<Container, Long> {

    Optional<Container> findByType(String type);
}