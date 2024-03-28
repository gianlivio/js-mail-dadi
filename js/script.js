// Array con email autorizzate
const emailOk = ['a@email.com', 'b@email.com', 'c@email.com'];
console.log(emailOk);


// Prompt "inserisci email"
const userEmail = prompt("Inserisci la tua email:");
console.log(userEmail);


// Controllo email mediante ciclo for
let trovata = false;

for (let i = 0; i < emailOk.length; i++) {
    
    if (userEmail === emailOk[i]) {
        trovata = true;
    }
}

// Elemento DOM selezionato (div)
const messageContainer = document.getElementById('message-container');

// Append del contenuto mediante ciclo for

if (trovata)  {
    messageContainer.append("Benvenuto");
    console.log("Benvenuto");
} else {
    messageContainer.append("Accesso Negato");
    console.log("Accesso Negato");
}