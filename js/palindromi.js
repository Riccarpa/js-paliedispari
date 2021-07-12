/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// verifica nome inserito

do {
    var userWord = prompt('inserisci una parola', 'anna').trim();

} while (!userWord || !isNaN(userWord))

//funzione reverse

function stringRevert(word) {
    var word = word.split('');

    var wordReverse = ' ';
    for (i = userWord.length - 1; i >= 0; i--) {

        wordReverse += word[i];
    }

    return wordReverse.trim();

}
//evocazione funzione

userWordReverse = stringRevert(userWord);

//condizioni finali

if (userWordReverse === userWord) {
    console.log('palindroma');
} else {
    console.log('non palindroma');
}