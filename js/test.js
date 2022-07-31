function valorFinal(precio, porcentajeImpuesto, porcentajeDescuento) {
  return (
    precio +
    (precio * porcentajeImpuesto) / 100 -
    (precio * porcentajeDescuento) / 100
  );
}

for (let i = 0; i < 3; i++) {
  let precioFinal = valorFinal(
    parseFloat(prompt("Ingresar precio del producto")),
    parseFloat(prompt("Ingresar % de impuesto")),
    parseFloat(prompt("Ingresar % de descuento"))
  );

  alert("El precio final del producto es: $" + precioFinal);
  console.log("Precio final: " + precioFinal);
}