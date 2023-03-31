const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1100, img: "esculpidas.webp" },
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

function Servicio(nombre, precio, img) {
  this.id = servicios.length + 1;
  this.nombre = nombre;
  this.precio = parseFloat(precio);
  //valido si recibo imagen
  /* if (!img) {
    this.img = "https://via.placeholder.com/300";
  } else {
    this.img = img;
  } */
  if (img) {
    this.img = img;
  } else {
    this.img = "https://via.placeholder.com/300";
  }
}

console.log(servicios);

const nuevoServicio = new Servicio("depilacion", 3800, "img.jpg");
//console.log(nuevoServicio);

servicios.push(nuevoServicio);
//console.log(servicios);

//array.metodo(({ id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" })=>{})//traduucion
const encontrado = servicios.find((el) => {
  return el.precio > 2400;
});

//console.log(encontrado);

const findServices = (arr, filtro) => {
  const encontrado = arr.find((el) => {
    //return el.nombre == filtro;
    return el.nombre.includes(filtro);
  });

  return encontrado;
};
/* let ingreso = prompt("Ingresa un servicio");

const servEncontrado = findServices(servicios, ingreso);

if (servEncontrado) {
  console.log(servEncontrado);
} else {
  console.log("Servicio no encontrado");
}
const carrito = [];
carrito.push(servEncontrado); */

//console.log(carrito);


function fitrarPorPrecio(arr,filtro){
    return arr.filter(el=>{

      if(isNaN(filtro)){
        return "El valor no es un número"
      }else{

        return el.precio <= parseFloat(filtro)
      }
    })  
}

const servFiltrados= fitrarPorPrecio(servicios, "2300")

console.log(servFiltrados);

const nuevaBusqueda= findServices(servFiltrados,"mani")

console.log(nuevaBusqueda);

const filtrar = (arr, filtro, param)=>{

  return arr.filter(el=>{

    if(param == "precio"){
      return el.precio <= parseFloat(filtro); 
    }
    else if(param == "id"){
      return el.id == parseFloat(filtro); 
    }
    else{
      return el[param].includes(filtro)
    }
  })

}
let ingreso2 = prompt("Ingresa criterio");
let ingreso = prompt("Ingresa precio");
const filtroPrecio= filtrar(servicios, ingreso, ingreso2)
const porNombre= filtrar(servicios, "masa", "nombre")
const porId= filtrar(servicios, "micro", "img")

console.log(filtroPrecio);
console.log(porNombre);
console.log(porId);

