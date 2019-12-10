// JSnack 5: Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al
// massimo quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che
// hanno la posizione compresa tra “a” e “b”


// ragioniamo per gradi, impostando valori fissi:
// a è più piccolo di b
var a = 3;
var b = 5;
// b non è più grande della lunghezza dell'array
var array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
var newArray = [];
// i limiti entro cui si muove il ciclo for sono il valore di a e b
for (var i = a; i <= b; i++) {
    console.log(i);
    // prendo l'elemento in posizione a
    var item = array[i];
    console.log(item);
    // lo pusho dentro una nuova array
    newArray.push(item);
};
console.log(newArray);
