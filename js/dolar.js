let cantidadDolar = prompt("Ingresar el monto en dólares");
let dolarNumerico = parseFloat(cantidadDolar);
let pasarPesos = 291 * dolarNumerico;
let output = "La conversión a pesos argentinos es de $" + pasarPesos;
alert(output);