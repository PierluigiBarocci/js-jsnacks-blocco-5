// JSnack 2: Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

function myTurn(word) {
    // splitta la parola (tutto il procedimento sarebbe di creare un
    // array che contenga tutte le lettere della parola splittata)
    // var array_word = word.split("");
    // con .reverse viene invertito l'ordine
    // var reversed_array = array_word.reverse();
    // con join vengono riattacate e restiuite come una stringa
    // var reverse_word = reversed_array.join("");
    // return la parola
    return word.split("").reverse().join("");
}
var parola = prompt('Inserisci una parola per favore');
alert('La parola ' + parola + ' rigirata è ' + myTurn(parola) + '.');
