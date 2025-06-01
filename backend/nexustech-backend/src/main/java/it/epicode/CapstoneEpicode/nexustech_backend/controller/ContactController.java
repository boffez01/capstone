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

    @Autowired
    private EmailService emailService;

    @PostMapping
    public ResponseEntity<String> submitContactForm(@RequestBody ContactMessage message) {
        try {

            contactMessageRepository.save(message);


            emailService.sendContactEmail(message.getName(), message.getEmail(), message.getSubject(), message.getMessage());

            return ResponseEntity.status(HttpStatus.CREATED).body("Messaggio ricevuto e email inviata con successo!");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Errore durante l'invio del messaggio o dell'email: " + e.getMessage());
        }
    }


}