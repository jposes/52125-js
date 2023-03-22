//Objetos literales
const contacto = {
  nombre: "Dani",
  apellido: "Lopez",
  direccion: "Calle falsa 123",
  telefono: "23324534",
};
/* console.log(contacto); */

const contacto2 = {
  nombre: "Pedro",
  apellido: "Martinez",
  direccion: "Calle falsa 923",
  telefono: { telTrabajo: "9872987434", telCasa: "87623876438672" },
  email: "pedro@mail.com",
};
/* console.log(contacto2); */

//aceder a valores de un objeto
/* console.log(contacto.nombre + " "+ contacto.apellido);
console.log(contacto.apellido);
console.log(contacto.direccion);
console.log(contacto.telefono);

contacto.email="danilopez@mail.com";
console.log(contacto.email);

//notacion de cochetes
console.log(contacto2["nombre"]);
console.log(contacto2["apellido"]);
console.log(contacto2["direccion"]);
contacto2["telefono"]="4372537253";
console.log(contacto2["telefono"]);
console.log(contacto2["email"]); */

//constructor
function Persona(nombre, apellido, edad, altura) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.altura = altura;
}
/* let nombre=prompt("ingresa tu nombre") */
/* const persona1= new Persona(nombre, "Perez", 23,1.67); */
const persona2 = new Persona("Lucia", "Gomaez", 23, 1.7);
/* console.log(persona1);
console.log(persona1.nombre);
console.log(persona1["apellido"]);
persona1.edad=24
console.log(persona1.edad);
console.log(persona2);
persona2.estadoCivil= true */

function Contacto(nombre, direccion, telefono, email) {
  this.nombre = nombre;
  this.direccion = direccion;
  this.nombre = nombre;
  this.telefono = telefono;
  this.email = email;
  //metodo
  this.mostrarNombre = function () {
    return "Nombre contacto: " + this.nombre;
  };
}

const contacto3 = new Contacto(
  "Luis Suarez",
  "Calle falsa 123",
  { tel1: "78987398734", tel2: "74587587457" },
  "luis@email.com"
);
/* console.log(contacto3.telefono.tel1);
console.log(contacto3.telefono.tel2); */
/* let contactNombre=contacto3.mostrarNombre();
console.log(contactNombre); */

function Producto(nombre, precio, stock){
  this.nombre= nombre;
  this.precio= parseFloat(precio);
  this.stock=parseInt(stock);

  this.vender= (cant)=>{
    if(cant <= this.stock){
      this.stock= this.stock - cant;
      return this.precio * cant;
    }else{
      return 'Sin stock';
    }
  }
  this.mostrarInfo=()=>{
    return "Titulo: "+ this.nombre + " Precio: $"+ this.precio + " stock:"+ this.stock 
  }
}

const libro= new Producto("Harry Potter y la piedra filosofal", 12000, 10);
const libro2= new Producto("Harry Potter y la Camara  Secreta ", 15000, 5);

console.log(libro.mostrarInfo());

let venta=libro.vender(11)
console.log(libro.vender(11));
console.log(libro.mostrarInfo());
let venta2=libro2.vender(3)
console.log(venta2);
console.log(libro2.mostrarInfo());

//in
console.log("nombre" in libro);
console.log("nombre" in libro2);
console.log("cantidad" in libro2);
libro["nombre"]
for (const papas in libro) {
//local
 //console.log(papas+ ": " + libro[papas]);
}


//class otra forma de definir un constructor
class Auto{
  constructor(marca, modelo, anio){
    this.marca= marca;
    this.modelo= modelo;
    this.anio= anio;
  }

  saludo(){
    return " hola soy un auto marca "+ this.marca;
  }
}


const auto1= new Auto("Audi","TT", 2023)
console.log(auto1.saludo());

