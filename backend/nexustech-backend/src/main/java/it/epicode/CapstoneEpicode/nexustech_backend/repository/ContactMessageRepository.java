package it.epicode.CapstoneEpicode.nexustech_backend.repository;

import it.epicode.CapstoneEpicode.nexustech_backend.model.ContactMessage; // Importa la classe ContactMessage
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactMessageRepository extends JpaRepository<ContactMessage, Long> {

}