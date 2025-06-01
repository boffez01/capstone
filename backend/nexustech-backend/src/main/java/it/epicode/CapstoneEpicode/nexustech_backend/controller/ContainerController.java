package it.epicode.CapstoneEpicode.nexustech_backend.controller;

import it.epicode.CapstoneEpicode.nexustech_backend.model.Container;
import it.epicode.CapstoneEpicode.nexustech_backend.repository.ContainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/containers")
@CrossOrigin(origins = "http://localhost:5173")
public class ContainerController {

    @Autowired // Inietta l'istanza di ContainerRepository
    private ContainerRepository containerRepository;

    @GetMapping
    public List<Container> getAllContainers() {
        return containerRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Container> getContainerById(@PathVariable Long id) {
        Optional<Container> container = containerRepository.findById(id);
        return container.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    @PreAuthorize("hasRole('ADMIN')") // Proteggi l'endpoint: solo utenti con ruolo ADMIN possono accedervi
    public ResponseEntity<Container> createContainer(@RequestBody Container container) {
        Container savedContainer = containerRepository.save(container);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedContainer); // Restituisci 201 Created
    }


    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')") // Proteggi l'endpoint
    public ResponseEntity<Container> updateContainer(@PathVariable Long id, @RequestBody Container updatedContainer) {
        if (!containerRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        updatedContainer.setId(id);
        Container savedContainer = containerRepository.save(updatedContainer);
        return ResponseEntity.ok(savedContainer);
    }


    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteContainer(@PathVariable Long id) {
        if (!containerRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        containerRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}