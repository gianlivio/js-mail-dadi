// Array con email autorizzate
//  const emailOk = ['a@email.com', 'b@email.com', 'c@email.com'];
//  console.log(emailOk);


// Prompt "inserisci email"
//  const userEmail = prompt("Inserisci la tua email:");
//  console.log(userEmail);


// Controllo email mediante ciclo for
//  let trovata = false;

//  for (let i = 0; i < emailOk.length; i++) {

//      if (userEmail === emailOk[i]) {
//          trovata = true;
//      }
//  }

// Elemento DOM selezionato (div)
//  const messageContainer = document.getElementById('message-container');

// Append del contenuto mediante ciclo for

//  if (trovata)  {
//      messageContainer.append("Benvenuto");
//      console.log("Benvenuto");
//  } else {
//      messageContainer.append("Accesso Negato");
//      console.log("Accesso Negato");
//  }

// Array con email autorizzate
const emailOk = ['a@email.com', 'b@email.com', 'c@email.com'];
console.log(emailOk);

// Selezioniamo l'input, il bottone e il div per i messaggi
const emailInput = document.getElementById('email-input');
const loginButton = document.getElementById('login-button');
const messageContainer = document.getElementById('message-container');

// Ascoltiamo l'evento click sul bottone di login
loginButton.addEventListener('click', function() {
    // Ottieni l'email dall'input
    const userEmail = emailInput.value;
    console.log(userEmail);

    // Controllo delle email mediante ciclo for
    let trovata = false;
    for (let i = 0; i < emailOk.length; i++) {
        if (userEmail === emailOk[i]) {
            trovata = true;
        
        }
    }

    // Append del contenuto mediante ciclo for
    if (trovata) {
        messageContainer.textContent = "Benvenuto";
        console.log("Benvenuto");
    } else {
        messageContainer.textContent = "Accesso Negato";
        console.log("Accesso Negato");
    }
});