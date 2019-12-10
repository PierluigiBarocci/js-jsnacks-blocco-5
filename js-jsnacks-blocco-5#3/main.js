// JSnack 3: Crea 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano
// meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi
// di zucchine

// creo 2 array per le zucchina corte e lunghe
var zucchinaShort = [];
var zucchinaLong = [];
// creo 2 var per la somma dei pesi da incrementare
var final_light = 0;
var final_heavy = 0;
// ciclo for con limite a 10 elementi
for (var i = 0; i < 10; i++) {
    // genero un peso random
    var peso = generaRandom(100, 300);
    // lunghezza random
    var lunghezza = generaRandom(5, 30);
    // e varietà
    var varieta = generaRandom(0, 200);
    // creo un oggetto
    var object = {
        'varieta': 'a-' + varieta + '',
        'peso': peso,
        'lunghezza': lunghezza
    };
    // una volta creato un oggetto
    // lo pusha dentro un array
    // se la lunghezza è minore di 15
    if (object.lunghezza < 15) {
        // lo pusha dentro l'array delle zucchine corte
        zucchinaShort.push(object);
        // e incrementa il valore del peso
        final_light = final_light + object.peso;
    }// altrimenti lo pusha nell'array delle zucchine lunghe
    else {
        zucchinaLong.push(object);
        // e incrementa il valore del peso (aggiungendo anche altri 100g)
        object.peso = object.peso + 100;
        final_heavy = final_heavy + object.peso;
    }
};
console.log('Questa è l\'array delle zucchine corte');
console.log(zucchinaShort);
console.log('Questa è l\'array delle zucchine lunghe');
console.log(zucchinaLong);
console.log('Questa è la somma dei pesi delle zucchine corte');
console.log(final_light);
console.log('Questa è la somma dei pesi delle zucchine lunghe');
console.log(final_heavy);

// funzione che genera un numero random tra min e max
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
};
