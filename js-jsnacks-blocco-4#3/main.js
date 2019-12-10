// JSnack 3: Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area.

var triangle = {
    'base': 10,
    'altezza': 18,
};
var ipotenusa = Math.round(Math.sqrt((triangle.base**2 + triangle.altezza**2)));
triangle.ipotenusa = ipotenusa;
console.log(triangle);
console.log(ipotenusa);
var perimetro = triangle.base + triangle.altezza + ipotenusa;
var area = (triangle.base * triangle.altezza) / 2;
console.log(perimetro);
console.log(area);
