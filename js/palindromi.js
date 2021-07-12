/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// 
var userWord = prompt('inserisci una parola', 'anna').trim();
userWordReverse = stringRevert(userWord);
console.log(userWord);
console.log(userWordReverse);

function stringRevert(word) {
    var word = word.split('');
    console.log(word);
    var wordReverse = ' ';
    for (i = userWord.length - 1; i >= 0; i--) {

        wordReverse += word[i];
    }

    return wordReverse.trim();

}

if (userWordReverse === userWord) {
    console.log('palindrome');
} else {
    console.log('non palindrome');
}