// JSnack 1 (blocco 5):
// Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// cero un array vuota
var zucchina = [];
// creo peso finale a 0
var peso_finale = 0;
// ciclo for con limite a 10 elementi
for (var i = 0; i < 10; i++) {
    // genero un peso random
    var peso = generaRandom(100, 300);
    // lunghezza random
    var lunghezza = generaRandom(10, 50);
    // e varietà
    var varieta = generaRandom(0, 200);
    // creo un oggetto
    var object = {
        'varieta': 'a-' + varieta + '',
        'peso': peso,
        'lunghezza': lunghezza
    }
    // una volta creato un oggetto
    // lo pusha dentro l'array
    zucchina.push(object);
    console.log(object.peso);
    // a ogni ciclo, incrementa peso
    peso_finale = peso_finale + object.peso;
};
console.log(zucchina);
console.log(peso_finale);

// funzione che genera un numero random tra min e max
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
};
