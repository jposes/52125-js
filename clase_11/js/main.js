const btnSearch = document.querySelector("#btnSearch"),
  inputIngreso = document.querySelector("#ingreso");
const contenedor = document.querySelector("#contenedor");
const carrito = [];
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
function crearHtml(el) {
  //llamo al elemento contenedor
  contenedor.innerHTML = "";
  //creo una variable con un estructura html
  let html = `<div class="card">
                <img src=" ./img/${el.img}" alt="${el.nombre}">
                <hr>
                <h3>${el.nombre}</h3>
                <p>Precio: $${el.precio} </p>
                  <div class="card-action">
                    <button id="${el.id}">Comprar</button>
                  </div>
              </div>`;
  //se la agrego al contenedor
  contenedor.innerHTML = html;
}

btnSearch.addEventListener("click", () => {
  let encontrado = buscarServicio(servicios, inputIngreso.value);
  crearHtml(encontrado);
});
//evento submit
const formulario = document.querySelector("#form-login");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target);
  const inputUser = e.target[0],
    inputPass = e.target[1];
  //console.log(`User: ${inputUser.value} Pass: ${inputPass.value}`);
});

//localStorage
localStorage.setItem('saludo', "Hola tarola");
localStorage.setItem('darkMode', true)
localStorage.setItem("edad", 18)
localStorage.setItem("nums", [1,2,3,4,5,6,7])
//sessionStorage
/* sessionStorage.setItem('invitadoUser', "Dani")
sessionStorage.setItem('invitadoPass', "12345") */

let saludo=localStorage.getItem('saludo');
let opcion=localStorage.getItem('darkMode') === "true"
let num= parseFloat(localStorage.getItem("edad"))

/* console.log(opcion);
console.log(typeof opcion);
console.log(num);
console.log(typeof num);
contenedor.innerHTML=saludo */
let nums= localStorage.getItem('nums').split(",")//parsear para que vuelvan a ser numeros
console.log(nums);
//removeItem
//localStorage.removeItem('darkMode')
//localStorage.clear()

const product= {nombre: "Telefono Nokia",precio: 13000 }

const prodEnJSON= JSON.stringify(product);
console.log(prodEnJSON);
localStorage.setItem("producto", prodEnJSON)
const desdeLS= JSON.parse(localStorage.getItem("producto"))

const btnSubmit=document.querySelector(".btn-login"),
inputUser= document.querySelector("#user"),
inputPass= document.querySelector("#pass"),
inputCheck= document.querySelector("#check");

function guardar(valor){
  let user= {usuario: inputUser.value, pass: inputPass.value};
  //validar campos vacios

  if(valor=== "sessionStorage"){
    sessionStorage.setItem("item", JSON.stringify(user));
  }
  if(valor === "localStorage"){
    localStorage.setItem("item", JSON.stringify(user));
  }
  return user
}

btnSubmit.addEventListener('click', ()=>{
  if(inputCheck.checked){
    guardar("localStorage")
  }else{
    guardar("sessionStorage")
  }
})
let user= JSON.parse(localStorage.getItem('item'))
console.log(user);
contenedor.innerHTML= `Bienvenido ${user.usuario}`