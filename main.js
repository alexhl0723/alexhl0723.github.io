    // Escucha el evento de entrada en el campo de búsqueda
document.getElementById('buscar-libros').addEventListener('input', function() {
    const filter = this.value.toLowerCase(); // Obtiene el texto de búsqueda y lo convierte a minúsculas
    const books = document.querySelectorAll('.container-most-read .read'); // Selecciona todos los elementos con clase 'read'

    // Recorre todos los libros y oculta o muestra según coincidan con la búsqueda
    books.forEach(function(book) {
        const name = book.querySelector('.name').textContent.toLowerCase(); // Obtiene y convierte a minúsculas el nombre del libro
        const autor = book.querySelector('.autor').textContent.toLowerCase(); // Obtiene y convierte a minúsculas el autor del libro

        // Verifica si el texto del nombre o del autor incluye el texto de búsqueda
        if (name.includes(filter) || autor.includes(filter)) {
            book.style.display = ''; // Muestra el libro si coincide
        } else {
            book.style.display = 'none'; // Oculta el libro si no coincide
        }
    });
});



// Variables para rastrear el estado del color de la página
let isDarkMode = false;
let backgroundColor = 'rgb(233, 230, 230)'; // Color de fondo por defecto
let textColor = 'black'; // Color de texto por defecto

// Inicializar el estado del color de la página
function initializeColorMode() {
    const body = document.body;
    const button = document.getElementById('colorToggleBtn');

    // Cargar el estado desde localStorage
    const savedMode = localStorage.getItem('darkMode');
    const savedBackgroundColor = localStorage.getItem('backgroundColor');
    const savedTextColor = localStorage.getItem('textColor');

    // Determinar el modo actual y los colores
    isDarkMode = savedMode === 'true';
    backgroundColor = savedBackgroundColor || (isDarkMode ? '#181411' : 'rgb(233, 230, 230)');
    textColor = savedTextColor || (isDarkMode ? 'white' : 'black');

    body.style.backgroundColor = backgroundColor;
    body.style.color = textColor;
    button.classList.toggle('active', isDarkMode);
}

// Botón de cambiar color a la página
document.getElementById('colorToggleBtn').addEventListener('click', function() {
    const body = document.body;
    const button = this;

    if (!isDarkMode) {
        backgroundColor = '#181411';
        textColor = 'white';
        button.classList.add('active');
        isDarkMode = true;
    } else {
        backgroundColor = '#fdf0e6';
        textColor = 'black';
        button.classList.remove('active');
        isDarkMode = false;
    }

    body.style.backgroundColor = backgroundColor;
    body.style.color = textColor;

    // Guardar los estados en localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
    localStorage.setItem('backgroundColor', backgroundColor);
    localStorage.setItem('textColor', textColor);
});

// Inicializar el color de la página al cargar
initializeColorMode();

function scrollSlider(distance) {
    document.querySelector('.container-generos').scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}

document.querySelector('.prev-btn').addEventListener('click', () => scrollSlider(-280));
document.querySelector('.next-btn').addEventListener('click', () => scrollSlider(280));

// Función para agregar un libro a "Continuar leyendo"
function agregarAContinuarLeyendo(titulo, autor, imagenSrc) {
    const libro = { titulo, autor, imagenSrc };

    let librosGuardados = JSON.parse(localStorage.getItem('continuarLeyendo')) || [];

    const libroExiste = librosGuardados.some(libroGuardado => libroGuardado.titulo === titulo);

    if (!libroExiste) {
        librosGuardados.push(libro);
        localStorage.setItem('continuarLeyendo', JSON.stringify(librosGuardados));
    }

    mostrarContinuarLeyendo();
}

// Función para mostrar los libros en "Continuar leyendo"
function mostrarContinuarLeyendo() {
    const librosGuardados = JSON.parse(localStorage.getItem('continuarLeyendo')) || [];
    const continuarLeyendoContainer = document.getElementById('continuar-leyendo');

    continuarLeyendoContainer.innerHTML = '';

    librosGuardados.forEach((libro, index) => {
        continuarLeyendoContainer.innerHTML += `
                <div class="read" data-index="${index}">
                <img src="${libro.imagenSrc}" alt="${libro.titulo}">
                <p class="name">${libro.titulo}</p>
                <span class="autor">${libro.autor}</span>
                <button>Leer</button>
                <button class="eliminar-libro">Eliminar</button> <!-- Botón de eliminación -->
            </div>
        `;
    });

    document.querySelectorAll('.eliminar-libro').forEach(button => {
        button.addEventListener('click', function() {
            const libroIndex = this.parentElement.getAttribute('data-index');
            eliminarLibro(libroIndex);
        });
    });
}

// Función para eliminar un libro de "Continuar leyendo"
function eliminarLibro(index) {
    let librosGuardados = JSON.parse(localStorage.getItem('continuarLeyendo')) || [];
    librosGuardados.splice(index, 1);
    localStorage.setItem('continuarLeyendo', JSON.stringify(librosGuardados));
    mostrarContinuarLeyendo();
}

// Evento DOMContentLoaded para cargar la lista al inicio
document.addEventListener('DOMContentLoaded', function() {
    mostrarContinuarLeyendo();

    document.querySelectorAll('.read').forEach(book => {
        book.addEventListener('click', function() {
            const titulo = this.querySelector('.name').textContent;
            const autor = this.querySelector('.autor').textContent;
            const imagenSrc = this.querySelector('img').src;

            agregarAContinuarLeyendo(titulo, autor, imagenSrc);
        });
    });
});
