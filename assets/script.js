/*
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
Consigli
Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
Da quante ore è composto un giorno?
Da quanti minuti è composta un'ora?
Da quanti secondi è composto un minuto?
Da quanti millisecondi è composto un secondo?
Quanti millisecondi mi separano da domani alle 9:30?
Esiste un oggetto JS in grado di gestire le date?
Esistono dei metodi per trasformare una data in millisecondi?
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
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Stampo il risultato nel dom in tempo reale
  document.querySelector("#result").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // Quanto il conteggio finirà stampo un messaggio di conclusione
  if (distance < 0) {
    clearInterval(setTimer);
    document.querySelector("#result").innerHTML = "FINITO!";
  }
}, 1000);