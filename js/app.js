// Variables
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaCursos = document.querySelector('#lista-cursos');

// Eventos
cargarEventListener();

function cargarEventListener() {
  listaCursos.addEventListener('click', agregarCurso);

};

//Funciones
function agregarCurso(e) {
  e.preventDefault();
  if(e.target.classList.contains('agregar-carrito')){
    const cursoSeleccionado = e.target.parentElement.parentElement;
    leerDatosCurso(cursoSeleccionado)
  }
}

// Leer el contenido HTML al que se le dio click y extraer la informacion del curso
function leerDatosCurso(curso) {
  console.log(curso);

  // Objeto con el curso actual
  const infoCurso = {
    imagen: curso.querySelector('img').src,
    nombre: curso.querySelector('h4').textContent,
    precio: curso.querySelector('.precio span').textContent,
    id: curso.querySelector('a').getAttribute('data-id'),
    cantidad: 1,


  }
  console.log(infoCurso);

}


