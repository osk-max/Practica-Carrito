// Variables inicio 04 mayo 2022
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector("#lista-cursos");

// Eventos 
escuchaEventos();

function escuchaEventos() {
  listaCursos.addEventListener('click', infoCursos);
}

// Funciones
// LLegar a la informacion carrito
function infoCursos(e) {
  e.preventDefault();
  if(e.target.classList.contains('agregar-carrito')) {
    const infoBtnCarrito = e.target.parentElement.parentElement;
    obtenerInfoCarrito(infoBtnCarrito);
  }
}

// Obtener informacion carrito
function obtenerInfoCarrito(curso) {
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    titulo: curso.querySelector('h4').innerText,
    precio: curso.querySelector('.precio span').innerText,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1
  }
  console.log(infoCurso);
}

