//El cajero automático
//Debemos generar un script para la operación de un cajero automático
/* El mismo tiene que: 
1- Mostrar un mensaje de bienvenida
2- Permitir hasta 3 intentos de ingreso con el PIN del cliente
  2a- Si ingresa correctamente dar mensaje de Bienvenida
  2b- Terminados los intentos informar al cliente que se comunique con el banco
3- En pantalla mostrar las siguientes opciones: 
  a- Saldo
  b- Retiro
  c- Depósito
  d- Salir 
4- Al finalizar mostrar mensaje
*/
let pinGuardado = "5701";
let ingreso = false;

for (let i = 2; i >= 0; i--) {
  let ingresoPIN = prompt("Ingresa tu PIN. Te quedan " + (i + 1) + " Intentos");
  if (ingresoPIN === pinGuardado) {
    alert("Bienvenido/a al banco Ya puedes operar");
    ingreso = true;
    break;
  } else {
    alert("Error");
  }
}

if (ingreso) {
  let saldo = 20000;
  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );

  while (opcion != "x") {
    switch (opcion) {
      case "1":
        alert("Tu saldo es $" + saldo);
        break;
      case "2":
        let retiro = parseInt(prompt("Ingresa el monto a retirar"));
        if (retiro <= saldo) {
          saldo = saldo - retiro;
          alert("Retiro exitoso. Tu saldo es $" + saldo);
        } else {
          alert(
            "⛔ Saldo insuficiente\n Ingresa a la opción 1 para ver el saldo"
          );
        }

        break;
      case "3":
        let deposito = parseInt(prompt("Ingresa el monto a depositar"));
        saldo = saldo + deposito;
        alert("Deposito exitoso. Tu saldo es $" + saldo);
        break;

      default:
        alert("Opcion no válida");
        break;
    }

    //condicion de salida
    opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }

  alert("👋  Gracias por operar con nosotros");
} else {
  alert("Retendremos tu tarjeta comunicate al 0800....");
}
