/* let nombre = prompt("Ingresa tu nombre");
console.log("Bienvenido/a " + nombre);

let n1 = prompt("Ingresa un número");
let n2 = parseFloat(prompt("Ingresa un número"));

n1= parseFloat(n1);

let res = n1 + n2;
console.log("El resultado de la suma entre " + n1 + " y " + n2 + " es: " + res); */

let condicion = false;

/* if(condicion){
    console.log("Vas a ver el mensaje");
} */

/* let numero=prompt("Ingresa un numero");
//= asignacion == comparacion
if(numero == 10){
    console.log("son iguales");
}else{
    console.log("No son iguales");
}

if(numero ==6){
    console.log('Es igual a 6');
} */

/* let nombreIngresado = prompt("Ingresa tu nombre");

if (nombreIngresado == "") {
  alert("Hey debes completar con un texto");
} else {
  alert("BIenvenido/a " + nombreIngresado);
} */

//if else if
let precioProducto = 25;
/* 
if(precioProducto <= 25){
    console.log("El precio es menor o igual que 25 es "+ precioProducto);
}else if(precioProducto < 40){
    console.log("El precio es menor que 40 es "+ precioProducto);
}else if(precioProducto < 75){
    console.log("El precio es menor que 75 es "+ precioProducto);
}else{
    console.log("Es precio es "+ precioProducto);
} */

//let edad= prompt("ingresa tu edad");
//variables booleanas
/* let ingresa = edad >= 18;
console.log(ingresa);

if(ingresa){
    alert('Podes ingresar al casino');
}else{
    alert("No podes ingresar");
} */

/* let n1 = parseFloat(prompt("Ingresa un número"));

if(n1 === 21){
    console.log("Es mayor o igual a 21");
}else{
    console.log("Los datos no son iguales");

} */

/* let nombreGuardado = "Melania";
let passGuardado = "1234";
let nombreIngresado = prompt("Nombre: ");
let edad=  prompt("Edad: "); */
//let passIngresado = prompt("Password: ");
/* if (nombreGuardado === nombreIngresado) {
  let passIngresado = prompt("Password: ");
  if (passGuardado === passIngresado) {
    console.log("Bienvenido/a");
  } else {
    console.log("Error");
  }
}else{
    console.log('Error');
} */
//AND && devuelve true cuando las 2 condiciones son true
/* if (nombreGuardado === nombreIngresado && passGuardado === passIngresado){
    console.log("Bienvenido/a");
}else{
    console.log('Error');
}
 */

//OR || devuelve true cuando las cualquiera de las condiciones es true
/* if (nombreGuardado === nombreIngresado || passGuardado === passIngresado){
    console.log("Bienvenido/a");
}else{
    console.log('Error');
}
 */

/* if(edad >=18 || nombreIngresado=="Homero"){
    console.log("Bienvenido");
}else{
    console.log("Fuera del club");
} */
let edadObligatoria = 18;
let edadOptativa = 16;
let edadLimite = 69;

let edadUsuario = parseInt(prompt("Ingresá tu edad"));

if (edadUsuario >= edadObligatoria && edadUsuario <= edadLimite) {
  alert("Estás obligado/a a Votar");
} else if (edadUsuario >= edadOptativa || edadUsuario > edadLimite) {
  alert("Podés votar, si querés");
} else {
  alert("No podés votar todavía");
}
//console.log("fin del proceso");
