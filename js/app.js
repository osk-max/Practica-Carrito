// VARIABLES
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// EVENTOS
cargarEventListener();

function cargarEventListener() {
  listaCursos.addEventListener('click', infoCurso)

}

// FUNCIONES
function infoCurso(e) {
  e.preventDefault();
  if(e.target.classList.contains('agregar-carrito')) {    
    const infoObtenidaCurso = e.target.parentElement.parentElement;    
    obtenerInfoCurso(infoObtenidaCurso);
  }
}

function obtenerInfoCurso(curso) {
  // Objeto informacion curso
  const infoCursoActual = {
    imagen: curso.querySelector('img').src,
    nombre: curso.querySelector('h4').innerText,
    precio: curso.querySelector('.precio span').innerText,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }
  impresionHtml(infoCursoActual);
}

function impresionHtml(curso) {
  
}
