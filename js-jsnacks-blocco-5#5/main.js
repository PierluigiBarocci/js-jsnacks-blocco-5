// JSnack 5: Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”

var test = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var final = [];

// con Slice si fa la stessa identica cosa in una riga

console.log(mySecondChoice(2, 6, test));

function mySecondChoice (a, b, array) {
    var sliced = array.slice(a, (b + 1));
    return sliced;
};


// prova più 'artigianale'

myChoice(2, 6, test, final);

console.log(final);

function myChoice(a, b, array, newArray) {
    if ((a > b) || (b >= array.length)) {
        alert('Attenzione, qualcosa nelle impostazioni non va bene');
        console.log(array.length);
    } else {
        // i limiti entro cui si muove il ciclo for sono il valore di a e b
        for (var i = a; i <= b; i++) {
            // prendo l'elemento in posizione a
            var item = array[i];
            // lo pusho dentro una nuova array
            newArray.push(item);
        };
        return newArray;
    }
}
