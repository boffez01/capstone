package it.epicode.CapstoneEpicode.nexustech_backend.controller;

import it.epicode.CapstoneEpicode.nexustech_backend.model.ContactMessage; // Importa ContactMessage
import it.epicode.CapstoneEpicode.nexustech_backend.repository.ContactMessageRepository; // Importa il repository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*; // Importa tutti i metodi (GetMapping, PostMapping, DeleteMapping, RequestMapping)

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional; // Importa Optional per la gestione del delete

@RestController
@RequestMapping("/api/admin") // Tutte le API in questo controller inizieranno con /api/admin
@CrossOrigin(origins = "http://localhost:5173") // Abilita CORS per il tuo frontend React
public class AdminController {

    // Iniezione delle dipendenze necessarie
    @Autowired
    private ContactMessageRepository contactMessageRepository; // Per accedere ai messaggi di contatto

    // Endpoint per ottenere i dati della dashboard amministrativa
    // GET http://localhost:8080/api/admin/dashboard
    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('ADMIN')") // Protegge questo metodo: solo gli utenti con il ruolo 'ADMIN' possono accedervi
    public ResponseEntity<Map<String, Object>> getAdminDashboardData() {
        // Recupera l'oggetto Authentication dal contesto di sicurezza di Spring.
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName(); // Estrae lo username dell'utente autenticato

        // In un'applicazione reale, qui recupereresti dati reali dal database.
        // Ad esempio, potresti contare i messaggi non letti o gli ordini in sospeso.
        // Per ora, restituiamo dei dati fittizi per testare la funzionalità.
        long totalUsers = 150; // Dati fittizi
        long pendingOrders = 5; // Dati fittizi
        long newMessages = contactMessageRepository.count(); // Esempio: conta tutti i messaggi

        Map<String, Object> dashboardData = new HashMap<>();
        dashboardData.put("username", username);
        dashboardData.put("message", "Benvenuto nella tua dashboard amministrativa, " + username + "!");
        dashboardData.put("lastLogin", "2025-05-30 10:25:00"); // Dato fittizio
        dashboardData.put("totalUsers", totalUsers);
        dashboardData.put("pendingOrders", pendingOrders);
        dashboardData.put("newMessages", newMessages); // Dato reale (conteggio messaggi)

        return ResponseEntity.ok(dashboardData);
    }

    @GetMapping("/contact-messages")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<ContactMessage>> getAllContactMessages() {
        List<ContactMessage> messages = contactMessageRepository.findAll();
        return ResponseEntity.ok(messages);
    }

    @DeleteMapping("/contact-messages/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteContactMessage(@PathVariable Long id) {
        if (!contactMessageRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        contactMessageRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}