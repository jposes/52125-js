//FOR  i++ i = i + 1
/* for (let i = 1; i <= 20; i++) {
  //bloque de ejecucion
  console.log(i);
} */
/* for (let i = 0; i < 3; i++) {
  alert("Ya llegamos a la India?");
  alert("NO");
}

alert("a ver? Ahora si"); */

/* alert("Podeis hacerme 3 preguntas");
alert("Que bueno porque solo necesito una");

for (let i = 1; i <= 3; i++) {
  let pregunta = prompt("");
  if (pregunta != "usted?") {
    let respuesta = "Si";
    alert(respuesta);
  } else {
    respuesta = "Así es... espero que los haya iluminado... ";
    alert(respuesta);
  }
}
alert("Gracias vuelva pronto"); */
/* 
for (let i = 0; i < 20; i++) {
  console.log(i);
} */
/* let limite = parseInt(prompt(" Ingresa un numero de limite"));
let ingreso = parseInt(prompt("Ingresa un numero"));

for (let i = 0; i <= limite; i++) {
  let resultado = ingreso * i;
  console.log(ingreso + " * " + i + " = " + resultado);
}
 */
/* 
for (let i = 1; i <= 3; i++) {
  let nombreIngresado = prompt("Ingresa tu nombre");
  alert("Bienvenido/a " + nombreIngresado + " tu turno es " + i);
}
alert("No hay mas turnos"); */

//break
let palabraClave = "ramon";

/* for (let i = 0; i < 3; i++) {
  let ingresoUsuario = prompt("Ingresa la palabra clave");
  if (ingresoUsuario === palabraClave) {
    alert("Adivinaste");
    break;
  }
}
alert("Fin del juego"); */

//continue
/* for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log("Múltiplo de 2");
    continue;
  }
  console.log(i);
} */
//Realizar un script que muestre si un número ingresado es primo es decir, solo se puede dividir por 1 y por sí mismo.
//Algo más… el 0 y los números negativos no son números primos. Modifica el script para que no sean contemplados
/* let numero = parseInt(prompt("Ingresa un número para saber si es primo"));
let esPrimo = true;

for (let i = 2; i < numero; i++) {
  if (numero % i === 0) {
    console.log("Además de dividir por 1 y por sí mismo, divide por " + i);
    esPrimo = false;
  }
}

if (esPrimo) {
  alert(numero + " Es primo");
} else {
  alert(numero + " No es primo");
} */

//while

/* while(true){
//bloque de ejecucion
} */

/* let i = 0;
while (i < 10) {
  console.log(i);

  //condicion de salida
  i++;
} */
/* 
let ingreso = prompt("Ya llegamos a la India?");

while (ingreso != "si") {
  ingreso = prompt("Ya llegamos a la India?");
}
alert("llegamos!"); */

/* let ingreso = prompt("ingresa un producto, para salir presiona 0");

while (ingreso != "0") {
  console.log("Ingresaste el pruducto: " + ingreso);
  ingreso = prompt("ingresa un producto, para salir presiona 0");
} */
//do while
/* let ingreso = "";

do {
  ingreso = prompt("Ingresa un producto . Para salir ingresa 0");
  console.log("Ingresaste el producto " + ingreso);
} while (ingreso != "0"); */

//if esle if else
let opcion = prompt("Selecciona una bebida \n1-Cafe \n2- Te\n3-Chocolate");
switch (opcion) {
  case "1":
    alert("Seleccionaste Cafe");
    break;
  case "2":
    alert("Seleccionaste Te");
    break;
  case "3":
    alert("Seleccionaste Chocolate");
    break;

  default:
    alert("Ingreso no valido");
    break;
}
