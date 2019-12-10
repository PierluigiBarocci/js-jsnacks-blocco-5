// JSnack 4A:
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

var teams = [
    {
        'nome': 'Juventus',
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': 'Inter',
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': 'Lazio',
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': 'Roma',
        'punti': 0,
        'falli': 0,
    },
    {
        'nome': 'Milan',
        'punti': 0,
        'falli': 0,
    },
]

// JSnack 4B:
// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti

for (var i = 0; i < teams.length; i++) {
    teams[i].punti = generaRandom(1, 100);
    teams[i].falli = generaRandom(1, 30);
};

console.log(teams);

// funzione che genera un numero random tra min e max
function generaRandom(min, max) {
    var random = Math.floor(Math.random() * (max - min + 1) ) + min;
    return random;
};
