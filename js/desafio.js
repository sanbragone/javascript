// Bienvenida a la aplicacion
alert("Bienvenido al menú de opciones de sanbragone.ar");

// Declaracion de variable para el input de datos
let input = prompt(
  "Seleccione una opcion:" +
    "\n" +
    "\n" +
    "1- Ventas" +
    "\n" +
    "2- Publicidad" +
    "\n" +
    "3- Soporte Tecnico" +
    "\n" +
    "4- Mayorista" +
    "\n" +
    "\n" +
    "Escriba 'Cancelar' para abortar la operacion"
);

// Si el input es distintos a 'Cancelar', ejecutamos el switch principal
while (input != "Cancelar") {
  switch (input) {
    case "1":
      let ventas1 = prompt(
        "Submenu de Ventas" +
          "\n" +
          "\n" +
          "1- Ventas mayores a $10.000" +
          "\n" +
          "2- Ventas mayores a $50.000" +
          "\n" +
          "3- Ventas mayores a $100.000"
      );
      // Dentro del primer 'case' del switch principal, agregamos otro switch para el submenu
      switch (ventas1) {
        case "1":
          alert("Premio de Bronce");
          break;

        case "2":
          alert("Premio de Plata");
          break;

        case "3":
          alert("Premio de Oro");
          break;

        default:
          break;
      }
      break;

    case "2":
      alert("Publicidad");
      break;

    case "3":
      alert("Soporte Tecnico");
      break;

    case "4":
      alert("Mayorista");
      break;

    default:
      break;
  }
  input = prompt(
    "Seleccione una opcion:" +
      "\n" +
      "\n" +
      "1- Ventas" +
      "\n" +
      "2- Publicidad" +
      "\n" +
      "3- Soporte Tecnico" +
      "\n" +
      "4- Mayorista" +
      "\n" +
      "\n" +
      "Escriba 'Cancelar' para abortar la operacion"
  );
}
