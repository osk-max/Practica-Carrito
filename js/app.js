// VARIABLES
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// EVENTOS
cargarEventListener();

function cargarEventListener() {
  listaCursos.addEventListener('click', agregarCursos);

};

// FUNCIONES
function agregarCursos(e) {
  e.preventDefault();
  if(e.target.classList.contains('agregar-carrito')) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado);
  }
};

// Extraer informacion del curso
function leerDatosCurso(curso) {
  // Objeto contenido curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').innerText,
    precio: curso.querySelector('.precio span').innerText,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  };

  // Agregar elemento al arreglo carrito
  articulosCarrito = [...articulosCarrito, infoCurso ];
  console.log(articulosCarrito)
  carritoHtml();
};

// Muestra los articulos de compras en el html
function carritoHtml() {
  
  
}
