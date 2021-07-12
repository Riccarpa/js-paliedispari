/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

//link to html

var evenOdd = document.getElementById('even-odd');
var userNumber = document.getElementById('user-number');

var button = document.getElementById('button');

var cpuResult = cpuNumber();

var yourNumberPrint = document.getElementById('your-number');
var yourevenOddChoice = document.getElementById('your-choice');
var cpuNumberPrint = document.getElementById('cpu-number');
var sumPrint = document.getElementById('sum');
var winnerPrint = document.getElementById('winner');

//funzione number random 1 to 5

function cpuNumber() {
    return Math.floor(Math.random() * (6 - 1) + 1);
}

// funzione even-odd recognizer

function evenOddScan(number) {
    var isEven = '';

    if (number % 2 === 0) {
        isEven = true;
    } else {
        isEven = false;
    }
    return isEven;
}




// attivare il bottone e registrare i dati 

button.addEventListener('click', function() {

    var evenOddValue = evenOdd.value;
    var userNumberValue = userNumber.value;



    //somma del numero dell'utente con quello della cpu 

    var finalNumber = parseInt(userNumberValue) + cpuResult;


    //stabilire se finalNumber è pari o dispari

    var evenOddOfSum = evenOddScan(finalNumber);
    console.log(evenOddOfSum);

    if (evenOddOfSum === true) {
        evenOddOfSum = 'even';

    } else {
        evenOddOfSum = 'odd';
    }

    // annuncia il vincitore
    var winner = '';

    if (evenOddOfSum == evenOddValue) {
        winner = 'Hai vinto';
    } else {
        winner = 'Hai perso';
    }




    //stampa in pagina

    yourNumberPrint.innerHTML = 'il tuo numero è: ' + userNumberValue;
    cpuNumberPrint.innerHTML = ' il numero della cpu è: ' + cpuResult;
    yourevenOddChoice.innerHTML = ' hai scelto :' + evenOddValue;
    sumPrint.innerHTML = 'La somma dei due numeri genera un numero: ' + evenOddOfSum;
    winnerPrint.innerHTML = winner;





})