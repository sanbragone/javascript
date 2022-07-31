function edadPromedioCalc(edad1, edad2, edad3, edad4, edad5) {
  return (edad1 + edad2 + edad3 + edad4 + edad5) / 5;
}

const edadPromedioFinal = edadPromedioCalc(
  parseInt(prompt("Ingresa la edad de la primera persona")),
  parseInt(prompt("Ingresa la edad de la segunda persona")),
  parseInt(prompt("Ingresa la edad de la tercera persona")),
  parseInt(prompt("Ingresa la edad de la cuarta persona")),
  parseInt(prompt("Ingresa la edad de la quinta persona"))
);

document.getElementById("edadPromedioFinal").innerHTML = Math.round(edadPromedioFinal);
console.log("Registro consola: " + Math.round(edadPromedioFinal));
