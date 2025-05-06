# 🚛 Capstone Project - Gestionale Container Edili

Benvenuto nel progetto finale del mio percorso con **EPICODE**: un'applicazione web realizzata per un'azienda specializzata nel trasporto e smaltimento di detriti e rifiuti edili tramite container di varie misure.

## 🎯 Obiettivo del progetto

Digitalizzare la gestione dell'azienda e offrire un'interfaccia semplice ma professionale per i clienti e per l'amministrazione. I clienti potranno:
- Visualizzare i container disponibili con dimensioni e prezzi
- Aggiungere uno o più container al carrello
- Ottenere un preventivo personalizzato

L'amministratore potrà:
- Accedere a una sezione riservata con login
- Aggiungere e gestire clienti
- Registrare lavori svolti, quantità trasportate, pagamenti effettuati e debiti

## 🧰 Tecnologie utilizzate

### Frontend
- React
- Tailwind CSS / Bootstrap
- React Router
- Axios

### Backend
- Java + Spring Boot
- Spring Security (per autenticazione)
- PostgreSQL (con JPA / Hibernate)
- REST API
- Maven o Gradle (build tool)

### Extra
- Google Maps API (per mappa e indirizzo azienda)
- Java Mail Sender (per form contatti)
- Flyway (per migrazioni DB opzionale)
- GitHub Actions (CI/CD opzionale)
- Deploy con Vercel (frontend) e Render / Railway / VPS per backend

---

## 📦 Funzionalità principali

### Per i clienti
- 🗃️ Scelta container tra varie misure e prezzi
- 🛒 Carrello con preventivo aggiornato
- 📝 Form di contatto
- 📍 Mappa dell’azienda con info utili

### Per l’amministrazione
- 🔐 Login riservato (admin)
- 👤 Gestione clienti e lavori
- 💰 Monitoraggio entrate/uscite
- ⚖️ Quantità merce/detriti gestiti

---

## 🚀 Rilasci previsti

| Versione | Descrizione |
|----------|-------------|
| **v1**   | Homepage, carrello, preventivo, form contatto, login admin base |
| **v2**   | Mappa Google, CRUD clienti, salvataggio su PostgreSQL |
| **v3**   | Ottimizzazioni UI, sicurezza JWT, refactoring, README finale e deploy completo |

---


