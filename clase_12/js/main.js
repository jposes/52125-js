const anio = new Date().getFullYear();

const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

//Funciones de búsqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}
const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso");
let contenedor = document.querySelector("#contenedor");

btnSearch.addEventListener("click", () => {
  const encontrado = buscarServicio(servicios, inputIngreso.value);
});

const inputUser = document.querySelector("#user"),
  inputPass = document.querySelector("#pass"),
  check = document.querySelector("#check"),
  btnLogin = document.querySelector("#login"),
  message = document.querySelector("#message");

function guardar(valor) {
  let user = { usuario: inputUser.value, pass: inputPass.value };
  if (user.usuario === "" || user.pass === "") {
    message.innerHTML = "Error todos los campos requeridos";
    return;
  } else {
    /*  if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    } */
    valor === "sessionStorage" &&
      sessionStorage.setItem("item", JSON.stringify(user));
    /* if (valor === "localStorage") {
       localStorage.setItem("item", JSON.stringify(user));
    } */
    valor === "localStorage" &&
      localStorage.setItem("item", JSON.stringify(user));
  }
  return user;
}

function recuperarDatos(datos) {
  if (datos) {
    inputUser.value = datos.usuario;
    inputPass.value = datos.pass;
  }
}

recuperarDatos(JSON.parse(localStorage.getItem("item")));

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (check.checked) {
    guardar("localStorage");
  } else {
    guardar("sessionStorage");
  }
});
let temp = 26;
if (temp > 30) {
  console.log("Dia caluroso");
} else {
  // console.log("Dia agradable");
}

//condicion ? true : false;

let clima = temp > 30 ? "Dia caluroso" : "Dia agradable";
//console.log(clima);

/* let permiso;
let edad= 18
if (edad >= 18) {
  permiso = true;
} else {
  permiso = false;
}

if (permiso){
  console.log("Podes entrar al casino");
}else{
  console.log("Vuelve cuando seas mayor");
} */
let edad1 = 17;
let permiso = edad1 >= 18 ? true : false;
//console.log(permiso ? "Podes entrar" : "NO podes entrar");

//Operador AND
let carrito = [1];

if (carrito.length === 0) {
  console.log("carrito vacio");
}

carrito.length === 0 && console.log("Carrito vacio");

//OP OR

/* console.log(personaje || "El personaje no existe");
console.log(personaje2 || "El personaje no existe");
 */
//inicializar variables de forma condicional

//Coercion
localStorage.setItem("almacen", JSON.stringify({ nombre: "arroz" }));
localStorage.removeItem("almacen");
let almacen = JSON.parse(localStorage.getItem("almacen")) || [];
/* if(localStorage.getItem("almacen")){
  almacen= JSON.parse(localStorage.getItem("almacen"))
}else{
  almacen = []
} */
//console.log(almacen);

//acceso condicional  al objeto ?
/* console.log(personaje?.nombre);
console.log(personaje?.manager);
console.log(personaje2?.nombre);

console.log("Continua el codigo"); */

//Desestructuracion 
const personaje = {
  nombre: "Juanito",
  apellido: "Arcoiris",
  edad: 10,
  manager: { nombre: "Homero", apellido: "Simpson" },
};

const personaje2 = null;

let nombrePersonaje= personaje.nombre
let apellidoPersonaje= personaje.apellido
//console.log(nombrePersonaje);

const {nombre, apellido, manager:{nombre:Nombre, apellido:Apellido}, telefono} = personaje

/* console.log(nombre);
console.log(apellido);
console.log(telefono); */// indefinido

//alias
//const {nombre:Nombre, apellido:Apellido}= manager
/* console.log(Nombre);
console.log(Apellido); */
const producto = {
  id_product: 1,
  category_product: "Teléfono Móvil",
  manufacturer_product: "Motorola",
  model_product: "Moto G42",
  price_product: 89000.99,
};
/* const {id_product:id,category_product:categoria}= producto
console.log(id);
console.log(categoria); */

/* const desestructura=(obj)=>{
const { id_product,manufacturer_product }= obj
console.log(id_product + " " + manufacturer_product);
}

desestructura(producto) */

const desestructura=({ id_product,manufacturer_product })=>{
  console.log(id_product + " " + manufacturer_product);
}

desestructura(producto)

//destructuring de arrays
const numeros= [1,4,2,7,8,99,-12]


const [,,a,b,c,,d,]= numeros;

console.log(a);
console.log(b);
console.log(numeros[2]);//[c]
console.log(d);
