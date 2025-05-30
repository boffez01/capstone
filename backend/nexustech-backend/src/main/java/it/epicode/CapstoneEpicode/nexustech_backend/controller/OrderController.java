package it.epicode.CapstoneEpicode.nexustech_backend.controller;

import it.epicode.CapstoneEpicode.nexustech_backend.model.Order;
import it.epicode.CapstoneEpicode.nexustech_backend.model.OrderItem;
import it.epicode.CapstoneEpicode.nexustech_backend.model.Container;
import it.epicode.CapstoneEpicode.nexustech_backend.repository.OrderRepository;
import it.epicode.CapstoneEpicode.nexustech_backend.repository.OrderItemRepository;
import it.epicode.CapstoneEpicode.nexustech_backend.repository.ContainerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderItemRepository orderItemRepository;

    @Autowired
    private ContainerRepository containerRepository;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Optional<Order> order = orderRepository.findById(id);
        return order.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody Order order) {
        try {
            if (order.getItems() != null && !order.getItems().isEmpty()) {
                double calculatedTotalPrice = 0.0;

                for (OrderItem item : order.getItems()) {
                    item.setOrder(order);

                    if (item.getContainer() != null && item.getContainer().getId() != null) {
                        Optional<Container> foundContainer = containerRepository.findById(item.getContainer().getId());
                        if (foundContainer.isEmpty()) {
                            throw new RuntimeException("Container non trovato con ID: " + item.getContainer().getId());
                        }
                        item.setContainer(foundContainer.get()); // AGGIUNTA QUESTA RIGA PER POPOLARE IL CONTAINER
                        item.setUnitPrice(foundContainer.get().getPrice());
                    } else {
                        if (item.getUnitPrice() == null) {
                            throw new RuntimeException("Prezzo unitario per OrderItem non fornito o container non specificato.");
                        }
                    }
                    calculatedTotalPrice += item.getQuantity() * item.getUnitPrice();
                }
                order.setTotalPrice(calculatedTotalPrice);
                order.setStatus("Pending");
            } else {
                throw new RuntimeException("L'ordine deve contenere almeno un elemento.");
            }

            Order savedOrder = orderRepository.save(order);

            return ResponseEntity.status(HttpStatus.CREATED).body(savedOrder);
        } catch (RuntimeException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Errore nella creazione dell'ordine: " + e.getMessage());
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Errore inaspettato durante la creazione dell'ordine: " + e.getMessage());
        }
    }

    @PutMapping("/{id}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Long id, @RequestParam String status) {
        Optional<Order> orderOptional = orderRepository.findById(id);
        if (orderOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Order order = orderOptional.get();
        order.setStatus(status);
        Order updatedOrder = orderRepository.save(order);
        return ResponseEntity.ok(updatedOrder);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        if (!orderRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        orderRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}