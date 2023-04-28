/*
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/

/*____________________________________________*/

// Varibile dove indica la data a cui puntare
const countDownDate = new Date("April 28, 2023 09:30:00").getTime();

// Aggiorna l'intervallo un secondo alla volta
const setTimer = setInterval(function() {

  // Prende la data e l'ora di oggi
  const currentDate = new Date().getTime();
    
  // Trova la distanza tra la data di oggi e quella da raggiungere
  let distance = countDownDate - currentDate;
    
  // Calcolo del tempo per giorni, ore, minuti e secondi
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Stampo il risultato nel dom in tempo reale
  document.querySelector(".result").innerHTML = days + "G. " + hours + "Ore "
  + minutes + "Min. " + seconds + "Sec. ";
    
  // Quanto il conteggio finirà stampo un messaggio di conclusione
  if (distance <= 0) {
    clearInterval(setTimer);
    document.querySelector(".result").innerHTML = "FINITO!";
  }
}, 1000);