package it.epicode.CapstoneEpicode.nexustech_backend.controller;

import it.epicode.CapstoneEpicode.nexustech_backend.model.Container;
import it.epicode.CapstoneEpicode.nexustech_backend.repository.ContainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize; // Import per proteggere gli endpoint
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController // Indica che questa classe è un controller REST
@RequestMapping("/api/containers") // Tutte le API in questo controller inizieranno con /api/containers
@CrossOrigin(origins = "http://localhost:5173") // Abilita CORS per il tuo frontend React
public class ContainerController {

    @Autowired // Inietta l'istanza di ContainerRepository
    private ContainerRepository containerRepository;

    // API per ottenere tutti i container (pubblico)
    // GET http://localhost:8080/api/containers
    @GetMapping
    public List<Container> getAllContainers() {
        return containerRepository.findAll();
    }

    // API per ottenere un container tramite ID (pubblico)
    // GET http://localhost:8080/api/containers/{id}
    @GetMapping("/{id}")
    public ResponseEntity<Container> getContainerById(@PathVariable Long id) {
        Optional<Container> container = containerRepository.findById(id);
        return container.map(ResponseEntity::ok) // Se trovato, restituisci 200 OK con il container
                .orElse(ResponseEntity.notFound().build()); // Altrimenti, restituisci 404 Not Found
    }

    // API per aggiungere un nuovo container (solo per ADMIN)
    // POST http://localhost:8080/api/containers
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')") // Proteggi l'endpoint: solo utenti con ruolo ADMIN possono accedervi
    public ResponseEntity<Container> createContainer(@RequestBody Container container) {
        Container savedContainer = containerRepository.save(container);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedContainer); // Restituisci 201 Created
    }

    // API per aggiornare un container esistente (solo per ADMIN)
    // PUT http://localhost:8080/api/containers/{id}
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')") // Proteggi l'endpoint
    public ResponseEntity<Container> updateContainer(@PathVariable Long id, @RequestBody Container updatedContainer) {
        if (!containerRepository.existsById(id)) {
            return ResponseEntity.notFound().build(); // Container non trovato
        }
        updatedContainer.setId(id); // Assicurati che l'ID del container aggiornato sia quello del percorso
        Container savedContainer = containerRepository.save(updatedContainer);
        return ResponseEntity.ok(savedContainer); // Restituisci 200 OK
    }

    // API per eliminare un container (solo per ADMIN)
    // DELETE http://localhost:8080/api/containers/{id}
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')") // Proteggi l'endpoint
    public ResponseEntity<Void> deleteContainer(@PathVariable Long id) {
        if (!containerRepository.existsById(id)) {
            return ResponseEntity.notFound().build(); // Container non trovato
        }
        containerRepository.deleteById(id);
        return ResponseEntity.noContent().build(); // Restituisci 204 No Content
    }
}