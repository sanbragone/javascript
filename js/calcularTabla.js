//Aplicacion para calcular la tabla del numero ingresado y la cantidad de veces que se especifique en el segundo numero.

let primerNumero = prompt("Ingresa el numero calcular");
let primerNumeroParseado = parseInt(primerNumero);

let segundoNumero = prompt("Cantidad de veces a calcular");
let segundoNumeroParseado = parseInt(segundoNumero);

for (let i = primerNumeroParseado; i <= segundoNumeroParseado; i++) {
  let resultado = primerNumeroParseado * i;
  console.log(primerNumeroParseado + " X " + i + " = " + resultado);
}
