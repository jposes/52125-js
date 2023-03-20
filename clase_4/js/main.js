//Funciones function nombre(){}
//declaracion
function saludar() {
  //bloque de ejecucion
  alert("Buen día");
}

//llamado o invocar
/* for (let i = 0; i < 2; i++) {
  saludar();
} */

/* let num1=parseFloat(prompt("Ingresa un numero"))
let num2=parseFloat(prompt("Ingresa un numero"))


function suma(numero1,numero2){
  console.log(numero1 + numero2);
}

suma(10,23)
suma(num1,num2) */

function saludoConNombre(nombre) {
  alert("Buen dia " + nombre);
}

/* saludoConNombre("Tomas");
saludoConNombre("Melania");
saludoConNombre("Luis");
saludoConNombre("Franco");
 */

function saludoConNombreYMomento(nombre, momento) {
  alert(momento + " " + nombre);
}
/* 
saludoConNombreYMomento("Tomas","Buen dia")
saludoConNombreYMomento("Fabiola","Buenas tardes")
saludoConNombreYMomento("Buenas tardes","Fabiola") */

let resultado = 0;

function suma(numero1, numero2) {
  resultado = numero1 + numero2;
}

suma(90, 10);

function mostrar(mensaje) {
  alert(mensaje);
}
/* mostrar("La opracion entre 90 y 10 es: ")
mostrar(resultado) */

function resta(numero1, numero2) {
  return numero1 - numero2;
}

let resResta = resta(2, 8);
let resResta1 = resta(22, -8);

/* mostrar(resResta)
mostrar(resResta) */
/* console.log(resResta);
console.log(resResta1);

console.log(resta(10, 3));
 */
function calcular(n1, n2, op) {
  switch (op) {
    case "+":
      return n1 + n2;

    case "-":
      return n1 - n2;

    case "*":
      return n1 * n2;

    case "/":
      if (n2 != 0) {
        return n1 / n2;
      } else {
        return "No es posible dividir por 0";
      }

    default:
      return "operacion no valida";
  }
}

let resSuma = calcular(13, 20, "+");
let resSubtract = calcular(13, 20, "-");
let resMutiply = calcular(13, 20, "*");
let resDiv = calcular(10, 10, "/");
let resError = calcular(10, 23, "a");
/* 
mostrar(resSuma);
mostrar(resSubtract);
mostrar(resMutiply);
mostrar(resDiv);
mostrar(resError); */

//El scope o ambito de las variables
let variable = "Soy un variable global"; //global

function cambio() {
  let variable = "Soy una variable local"; //local
  // console.log(variable);
  return variable;
}
console.log(cambio());

if (true) {
  let variable = "soy una variable local del if";
  console.log(variable);
}
for (let i = 0; i < 2; i++) {
  // console.log(i);//local
}
//console.log(i); para Js no existe

console.log(variable);
let result = 0;

function add(n1, n2) {
  let result = n1 + n2;
  //return result
}
/* console.log(add(1,3))
console.log(result); */
//funciones anomimas

const saludo2 = function (saludo, nombre) {
  console.log(saludo + " " + nombre);
};

saludo2("hola", "Dani");

//funciones flecha ()=>{}

const saludo3 = (saludo, nombre) => {
  return saludo + " " + nombre;
}; //return implicito

/* console.log(saludo3("Hola", "Tomas")); */

//Ejemplo

const validar=(valor)=>{
  if (valor== "si") {
    return true
  }else{
    return false
  }
}

const precioConIva = (precio, consumidor) => {
  let resultado = 0;
  if (consumidor) {
    return (resultado = precio * 1.21);
  } else {
    return (resultado = precio * 1.105);
  }
};

let precio = parseFloat(prompt("Ingresa el precio de tu producto"));
let consumidor = prompt("Sos consumidor final? si/no");
let precioCFinal= precioConIva(precio, validar(consumidor));
console.log(precioCFinal);
precio = parseFloat(prompt("Ingresa el precio de tu producto"));
consumidor = prompt("Sos consumidor final? si/no");
let precioRI= precioConIva(precio, validar(consumidor));
console.log(precioRI);