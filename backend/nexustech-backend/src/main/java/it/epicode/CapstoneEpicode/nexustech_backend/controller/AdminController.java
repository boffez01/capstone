package it.epicode.CapstoneEpicode.nexustech_backend.controller;

import it.epicode.CapstoneEpicode.nexustech_backend.model.ContactMessage; // Importa ContactMessage
import it.epicode.CapstoneEpicode.nexustech_backend.repository.ContactMessageRepository; // Importa il repository
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    @Autowired
    private ContactMessageRepository contactMessageRepository;


    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Map<String, Object>> getAdminDashboardData() {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();

        long totalUsers = 150;
        long pendingOrders = 5;
        long newMessages = contactMessageRepository.count();

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