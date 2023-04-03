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

const encontrado = servicios.find((el) => {
  return el.nombre == "manicura";
});

//console.log(encontrado);

//reduce
const totalInventario = servicios.reduce((acc, el) => {
  return acc + el.precio;
}, 0);

//console.log(totalInventario);
//sort => destructivo

/* const numeros = [1, 3, 2, 4, 6, 3, 22, 2];

const menorAMayor = numeros.sort((a, b) => a - b);
const mayorAMenor = numeros.sort((a, b) => b - a); */
/* console.log(menorAMayor);
console.log(mayorAMenor); */

/* const menorPrecio= servicios.sort((a, b) => a.precio - b.precio)
const mayorPrecio= servicios.sort((a, b) => b.precio - a.precio)
console.log(mayorPrecio); */

//Math

/* console.log(Math.PI);
console.log(Math.E);

console.log(Math.min(1,3,2,99,-9,7,-44));
console.log(Math.max(1,3,2,99,-9,7,-44)); */
/* 
console.log(Math.round(Math.PI))
console.log(Math.round(34.5))
console.log(Math.floor(34.8))
console.log(Math.ceil(34.0001))

console.log(Math.PI.toFixed(4)); */

/* console.log(Math.sqrt(25));
console.log(Math.pow(3,2)); */
function asignarOperacion(op) {
  switch (op) {
      case "+":
        return (a, b) => a + b;
  
      case "-":
        return (a, b) => a - b;
  
      case "*":
        return (a, b) => a * b;
  
      case "/":
        return (a, b) => {
          if (b == 0) {
            return "Error";
          } else {
            return a / b;
          }
        };

        case "raiz":
          return (a)=> Math.sqrt(a)
          //no existe raiz de numeros negativos
        case "pot":
          return (a, b) => Math.pow(a, b);
    
      default:
        return () => "El operador no es válido";
    }
  }
  
  let potencia= asignarOperacion("pot")

  let res= potencia(5,3)
  /* console.log(res); */

  //console.log(Math.ceil(Math.random()*100));

  function crearToken(){
    const numeros=[0,1,2,3,4,5,6,7,8,9]
    let token='';
    for (let i = 0; i < 6; i++) {
      let random=Math.floor(Math.random()*numeros.length)
      token = token + numeros[random]
      
    }
    return token
  }

  const tokenGenerado= crearToken()
  //console.log(tokenGenerado);
  const hexa = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "C",
    "B",
    "D",
    "E",
    "F",
  ];
  let color = "";

  for (let i = 0; i < 6; i++) {
    let aleatorio= Math.floor(Math.random()*hexa.length)
    color= color + hexa[aleatorio]
    
  }
  //console.log("El código hexadecimal es #"+color);

//Clase Date
const fecha= new Date();
/* console.log(fecha);
console.log(fecha.getMonth()+1);
console.log(fecha.getDate());
console.log(fecha.getFullYear());

console.log("La fecha de hoy es :" +fecha.getDate()+ "/" + (fecha.getMonth()+1) + "/" +fecha.getFullYear()); */

/* console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log("La fecha de hoy es :" + fecha.toLocaleDateString());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getTime()); */
//1 dia = 24hs = 86400000
function calcularEstadia(ingreso, egreso) {
  let fIngreso= new Date(ingreso).getTime()
  let fEgreso= new Date(egreso).getTime()

  let totalEstadia= (fEgreso- fIngreso)/86400000
return totalEstadia
}

//console.log(calcularEstadia("2023,3,12", "2023,3,14"));

let fechaIngreso = prompt("Ingresa la fecha de ingreso al Hotel", "2023-01-01");
let fechaEgreso = prompt("Ingresa la fecha de egreso al Hotel", "2023-01-01");
console.log(fechaIngreso);
console.log(fechaEgreso);
console.log(calcularEstadia(fechaIngreso, fechaEgreso));