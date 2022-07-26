//Solicitamos un nombre, con cinco iteraciones y en cada iteracion pedimos un texto (nombre). Con el texto se asigna un turno (numero). Luego se loguea en consola. Si el texto ingresado es nulo, se interrumpe la aplicacion y muestra una alerta. Luego se loguea en consola.

for (let i = 1; i <= 5; i++) {
  let nombreIngresado = prompt("Ingresa tu nombre");
  if (nombreIngresado == "") {
    alert("No ingreso el nombre");
    console.log("Error - No se ingreso texto en popup")
    break;
  }
  alert(nombreIngresado + ", tu turno es " + i);
  console.log("Turno otorgado correctamente a " + nombreIngresado);
}
