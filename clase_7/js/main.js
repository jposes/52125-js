class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = parseInt(stock);
  }

  vender(cant) {
    if (cant <= this.stock) {
      this.stock = this.stock - cant;
      return this.precio * cant;
    } else {
      return "Sin stock";
    }
  }
  mostrarInfo() {
    return (
      "Nombre: " +
      this.nombre +
      " Precio: $" +
      this.precio +
      " stock:" +
      this.stock
    );
  }
}
const libro = new Producto(
  "Harry Potter y la cámara de los secretos",
  "12000",
  5
);


const biblioteca = [
  libro,
  { nombre: "Las mil y una noches", precio: 8000, stock: 2 },
  new Producto("Insomnia", 15000, 3),
];

//numeros.push(2, 3, 4);
/* console.log(numeros);
for (const prod of biblioteca) {
  console.log(prod.nombre);
  console.log(prod.precio);
  console.log(prod.stock);
} */

let total = 0;
for (let vuelta = 1; vuelta <= 10; vuelta++) {
  total = total + vuelta;
}
//console.log(total);

function sumarRango(inicio, fin) {
  let total = 0;
  for (let i = inicio; i <= fin; i++) {
    total = total + i;
  }
  return total;
}
/* 
console.log(sumarRango(1,10));
console.log(sumarRango(3,250)); */
/* console.log("hola tarola"); */
/* alert("Hola".toUpperCase()) */

function mayorQue(n) {
  return (m) => m > n;
}

const mayorQueDiez = mayorQue(10); //(m)=> m>10

//console.log(mayorQueDiez(12)); //(12)=>12>10
//console.log(mayorQueDiez(-9));//(-9)=>-9>10

function asignarOperacion(op) {
  switch (op) {
    case "+":
    case "suma":
      return (a, b) => a + b;
    case "-":
      return (a, b) => a - b;
    
    case "*":
      return (a, b) => a * b;
    
    case "/":
      return (a, b) => a / b;
     
    default:
      return () => "El operador no es válido";
  }
}
/* const suma = asignarOperacion("suma");//(a,b)=>a + b
let resta = asignarOperacion("-");//(a,b)=>a - b
let multi = asignarOperacion("*");//(a,b)=>a * b
let divi = asignarOperacion("/");//(a,b)=>a / b
console.log(suma(2,5));
console.log(resta(2,5));
console.log(multi(2,5));
console.log(divi(2,5)); */

const numeros = [1, 2, 3, 4, 5, 56, 4, 2, 2, 4, 5,5];

function porCadaUno(arr, fn) {
  for (const elemento of arr) {//numeros
    fn(elemento);//console.log(elemento)
  }
}

//porCadaUno(numeros,console.log)

const triplicado=[]

porCadaUno(numeros,(el)=>{
  triplicado.push(el * 3)
})
/* 
console.log(numeros);
console.log(triplicado); */



const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  { id: 8, nombre: "mascarillas", precio: 2300, img: "mascarilla.jpeg" },
];

//Metodos de busqueda y transformacion
servicios.forEach((el)=>{
  //console.log(el);
})

//find
const encontrado=servicios.find((el)=> {
  return el.nombre == "mascarillas"
})

//console.log(encontrado);

//filter

const baratos=servicios.filter((el)=>{
  return el.precio < 1500
})
console.log(baratos);

//some true o false
const existe = servicios.some(el=> {
  return el.nombre == "microblanding"}
)

console.log(existe);

const nombres = servicios.map(el=> el.nombre)

console.log(nombres);

const servicioActualizado = servicios.map(el=>{
  return {
    id: el.id,
    nombre: el.nombre,
    precio: el.precio * 1.15,
    img:el.img
  }
})
console.log(servicios);
console.log(servicioActualizado);