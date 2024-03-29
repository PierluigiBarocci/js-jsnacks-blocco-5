// JSnack 4: Scrivi una funzione che fonda due array (con lo stesso
// numero di elementi) prendendo alternativamente gli
// elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var letters = ['a', 'b', 'c', 'd', 'e', 'f'];
var numbers = [1, 2, 3, 4, 5, 6, 7];
var final = [];

console.log(myMixup(letters, numbers, final));

// creo una funzione che ha come argomento 3 array, di cui l'ultima è quella vuota
function myMixup (first_array, second_array, destination_array) {
    // BISOGNA MIGLIORARLO: COSA FARE NEL CASO IN CUI GLI ARRAY DI PARTENZA ABBIANO LUNGHEZZA DIFFERENTE?
    // Li accorcio con .slice e tanti saluti :P
    if (first_array.length > second_array.length) {
        console.log('Mi dispiace, la prima array era troppo lunga: ho dovuto accorciarla');
        var first_array = first_array.slice(0, (second_array.length));
    };
    if (first_array.length < second_array.length) {
        console.log('Mi dispiace, la seconda array era troppo lunga: ho dovuto accorciarla');
        var second_array = second_array.slice(0, (first_array.length));
    };
    console.log(first_array);
    // finchè l'array di destinazione non ha la lunghezza corrispondente alla somma delle lunghezze dei due array di partenza
    while (destination_array.length < ((first_array.length) + (second_array.length))) {
        // inizio a ciclare il primo array
        for (var i = 0; i < first_array.length; i++) {
            var general_position = i;
            // prendo l'elemento in posizione i e lo metto dentro l'array finale
            destination_array.push(first_array[i]);
            // prendo anche l'elemento nella stessa posizione del secondo array e lo pusho
            destination_array.push(second_array[general_position]);
        }
    }
    // insomma: a ogni ciclo prende un elemento per array e lo butta nell'array finale,
    // resistuendo un array completamente mischiato
    return destination_array;
};
