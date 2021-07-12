/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


var userWord = prompt('inserisci una parola', 'anna');
userWord = stringRevert(userWord);

function stringRevert(word) {
    var word = word.split('');
    console.log(word);
    var wordReverse = ' ';
    for (i = userWord.length; i >= 0; i--) {
        wordReverse += word[i];
    }
    console.log(wordReverse);

}