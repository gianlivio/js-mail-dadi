// creo una funzione che restituisce num tra 1 e 6

function tiraDado() {
    return Math.floor(Math.random() * 6) + 1;
}
console.log("Tiro di prova per l'utente:", tiraDado());


// dichiaro le variabili bottone e risultato

const rollButton = document.getElementById('roll-button'); 
console.log(rollButton);

const rollResult = document.getElementById('roll-result');
console.log(rollResult);



// ascolto l'evento click sul rollButton

rollButton.addEventListener('click', function() {
    const tiroUtente = tiraDado(); 
    console.log(tiroUtente);
    const tiroComputer = tiraDado(); 
    console.log(tiroComputer);

    // ciclo for per determinare il rollResult

    let messRisultato;
    let coloreSfondo;
    if (tiroUtente > tiroComputer) {
        messRisultato = "Hai vinto!";
        coloreSfondo = "rgba(144, 238, 144, 0.5)";
    } else if (tiroUtente < tiroComputer) {
        messRisultato = "Hai perso.";
        coloreSfondo = "rgba(255, 99, 71, 0.5)";
    } else {
        messRisultato = "Pareggio..";
        coloreSfondo = "rgba(255, 165, 0, 0.5)";
    }

    // Visualizzazione del rollResult
    
    rollResult.innerHTML = `Tu: ${tiroUtente} - Computer: ${tiroComputer}. ${messRisultato}`;
    rollResult.style.backgroundColor = coloreSfondo;    

});