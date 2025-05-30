package it.epicode.CapstoneEpicode.nexustech_backend.model; // <<< ASSICURATI CHE IL PACKAGE SIA CORRETTO

public enum Role {
    ROLE_ADMIN, // Per gli amministratori (convenzione Spring Security: inizia con ROLE_)
    ROLE_USER   // Per gli utenti normali (se la tua app lo prevede)
}