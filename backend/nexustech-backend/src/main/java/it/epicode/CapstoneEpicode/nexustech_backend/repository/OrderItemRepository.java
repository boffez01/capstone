package it.epicode.CapstoneEpicode.nexustech_backend.repository;

import it.epicode.CapstoneEpicode.nexustech_backend.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}