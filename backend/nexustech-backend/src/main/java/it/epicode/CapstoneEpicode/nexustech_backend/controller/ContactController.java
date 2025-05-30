package it.epicode.CapstoneEpicode.nexustech_backend.controller;

import it.epicode.CapstoneEpicode.nexustech_backend.model.ContactMessage;
import it.epicode.CapstoneEpicode.nexustech_backend.repository.ContactMessageRepository;
import it.epicode.CapstoneEpicode.nexustech_backend.service.EmailService; // <<< AGGIUNGI QUESTO IMPORT
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;

    @Autowired // <<< INIETTA IL SERVIZIO EMAIL
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> submitContactForm(@RequestBody ContactMessage message) {
        try {
            // Salva il messaggio nel database
            contactMessageRepository.save(message);

            // CHIAMA IL SERVIZIO PER INVIARE L'EMAIL
            emailService.sendContactEmail(message.getName(), message.getEmail(), message.getSubject(), message.getMessage());

            return ResponseEntity.status(HttpStatus.CREATED).body("Messaggio ricevuto e email inviata con successo!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Errore durante l'invio del messaggio o dell'email: " + e.getMessage());
        }
    }

    // Puoi aggiungere qui l'endpoint per admin per vedere tutti i messaggi di contatto
    // GET http://localhost:8080/api/admin/contact-messages
    /*
    import java.util.List;
    import org.springframework.security.access.prepost.PreAuthorize; // Assicurati l'import se lo usi

    @GetMapping("/admin/contact-messages")
    @PreAuthorize("hasRole('ADMIN')")
    public List<ContactMessage> getAllContactMessages() {
        return contactMessageRepository.findAll();
    }
    */
}