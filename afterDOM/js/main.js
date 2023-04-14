const form = document.querySelector("form");

const inputNombre = document.querySelector("#nombre"),
  inputDescripcion = document.querySelector("#descripcion"),
  inputPrecio = document.querySelector("#precio"),
  inputImg = document.querySelector("#img"),
  inputTalle = document.querySelector("#select-talle"),
  btnGuardar = document.querySelector("#btnGuardar"),
  contenedor = document.querySelector("#contenedor");
const fragment = document.createDocumentFragment();

const productos = [];
const talles = ["xs", "s", "m", "xl", "xxl", "xxxl"];

for (const talle of talles) {
  const option = document.createElement("option");
  option.value = talle;
  option.innerText = talle;
  fragment.appendChild(option);
}

inputTalle.appendChild(fragment);
class Producto {
  constructor(nombre, descripcion, precio, talle, img) {
    this.id = productos.length + 1;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.talle = talle;
    if (img == "") {
      this.img = "https://via.placeholder.com/250";
    } else {
      this.img = img;
    }
  }
}

function limpiarCampos() {
  inputNombre.value = "";
  inputDescripcion.value = "";
  inputPrecio.value = "";
  inputTalle.value = "";
  inputImg.value = "";
}
//redundante
function guardarProducto(producto) {
  return productos.push(producto);
}
console.log(productos);

function crearHTML(arr) {
  let html;
  for (const producto of arr) {
    html = `<div class="col s4 m3">
  <div class="card">
<div class="card-image">
  <img class="responsive-img" src=${producto.img} />
  </div>
  <div class="card-content">
  <span class="card-title">${producto.nombre}</span>
    <p>
    ${producto.descripcion}
    <p>
  Size:${producto.talle}
</p>
  </p>
  <p>$${producto.precio}</p>
</div>
<div class="card-action">
  <input type= "button" class="btn" id=${producto.id} value="Comprar" >
</div>
</div>
</div>`;
  }
  contenedor.innerHTML = contenedor.innerHTML + html;

  //seleccionar el btnComprar
  const btnComprar= document.querySelectorAll('.card-action input[type="button"].btn')
  btnComprar.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      let agregado = productos.find(el=> el.id == btn.id)
      console.log(agregado);//podria ir a un carrito
    })
  })




}

//eventos

btnGuardar.addEventListener("click", () => {
  const newProducto = new Producto(
    inputNombre.value,
    inputDescripcion.value,
    inputPrecio.value,
    inputTalle.value,
    inputImg.value
  );
  //console.log(newProducto);
  productos.push(newProducto);
  //console.log(productos);
  crearHTML(productos);
  limpiarCampos()
});

//podemos utilizar el submit del formulario
