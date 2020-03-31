# MVP nuovo terminale betting - Container

### Descrizione:

Il modulo container è un'applicazione react, creata con create-react-app.
Ha tre funzionalità primarie.

- gestione routes dei singoli moduli esterni con relativi permessi
- gestione login utente e assegnazione permessi
- import di tutte le librerie condivise (react, react-dom, ecc...)

###Specifiche tecniche:
- React: 16.13.0
- Hooks: attivi
- Linguaggio: Typescript
- Linter: Airbnb
- Test: Jest + Enzyme (non del tutto funzionanti, ma configurati)

### Routes:
La configurazione delle routes avviene nel file:
```
src/config/app-routing.ts
```
dove ad ogni modulo (esterno o interno al container) è assegnato un path specifico e una funzione che restituisca se l'utente ha i permessi per accedervi.

Il dispatch vero e proprio viene eseguito dal componente:
```
RouteGuard
```
che mostra il componente in caso di autorizzazione consentita o redirige su una pagina di "Non autorizzato". 

### Utenti:
Il login avviene tramite un semplice form il cui submit attiva un servizio mock che assegna l'autorizzazione di "user" o di "admin".
Lo stato dell'utente e i suoi permessi sono salvati nel localStorage.

Il servizio "auth" e il relativo hook, non sono accessibili (per scelta) dall'esterno del container.

