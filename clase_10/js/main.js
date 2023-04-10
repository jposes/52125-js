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

const btnSearch = document.querySelector("button#btnSearch");
const inputs = document.querySelectorAll("input[type='text']");

/* btnSearch.addEventListener('click',()=>{
  console.log("hiciste click");
})
 */
btnSearch.onclick = () => {
  console.log("hiciste click desde un evento con prefijo on");
};

const caja = document.querySelector(".caja"),
  cajaPais = document.querySelector("#pais");
/* 
caja.addEventListener("mouseover", ()=>{
  
  caja.style.backgroundImage= 'url("./img/estados.jpg")';
  cajaPais.innerHTML= "<h2>Estados</h2>"
}
)
caja.addEventListener("mouseleave", ()=>{
  
  caja.style.backgroundImage= 'url("./img/australia.jpg")';
  cajaPais.innerHTML= "<h2>Australia</h2>"
}
)
caja.addEventListener("click", ()=>{
  
  caja.style.backgroundImage= 'url("./img/pum.png")';
  cajaPais.innerHTML= "<h2>PUM!</h2>"
}
)
 */
//eventos del teclado

const contenedor = document.querySelector("#contenedor");
const inputSearch = inputs[0];

/* inputSearch.addEventListener("keyup", () => {
  console.log(inputSearch.value);
  contenedor.innerText = inputSearch.value;
}); */
//change
/* inputs[1].addEventListener('change', ()=>{
  console.log('Cambiaste de input');
})

inputs[2].addEventListener('change', ()=>{
  console.log('Cambiaste de input');
}) */
const paises = [
  "Argentina",
  "Colombia",
  "Brasil",
  "México",
  "Uruguay",
  "Venezuela",
  "Perú",
  "Chile",
  "Polonia",
  "Francia",
  "Australia",
  "Letonia",
];
const selectPais = document.querySelector("select#paises");

paises.forEach((pais) => {
  let option = document.createElement("option");
  option.value = pais;
  option.innerText = pais;
  selectPais.appendChild(option);
});

selectPais.addEventListener("change", () => {
  let option = selectPais.options[selectPais.selectedIndex].value;
  console.log(option);
  document.querySelector("#info").innerText = option;
});

/* inputSearch.addEventListener('input',()=>{
  let encontrado =buscarServicio(servicios, inputSearch.value )
  console.log(encontrado);
}) */
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

  //modificar para que muestre un cartel producto no encotrado
  contenedor.innerHTML = html;
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    document.querySelector(".pop-up").classList.add("visible");
  } else {
    document.querySelector(".pop-up").classList.remove("visible");
  }
});
btnSearch.addEventListener("click", () => {
  let encontrado = buscarServicio(servicios, inputSearch.value);
  console.log(encontrado);
  crearHtml(encontrado);
});
