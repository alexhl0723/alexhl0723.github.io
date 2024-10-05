// Función para cargar las reseñas almacenadas en LocalStorage al cargar la página
function cargarResenas() {
    const resenasGuardadas = JSON.parse(localStorage.getItem("resenas")) || [];
    const contenedorResenas = document.getElementById("contenedor-resenas");

    // Limpiar el contenedor de reseñas antes de cargar
    contenedorResenas.innerHTML = "";

    // Crear elementos HTML para cada reseña almacenada
    resenasGuardadas.forEach(resena => {
        const nuevaResena = document.createElement("div");
        nuevaResena.classList.add("resena");
        nuevaResena.setAttribute("data-libro", resena.libro);
        nuevaResena.setAttribute("data-autor", resena.autor);

        nuevaResena.innerHTML = `
            <h3>${resena.libro} - ${resena.autor}</h3>
            <p class="calificacion">${"⭐".repeat(resena.calificacion)}</p>
            <p>"${resena.comentario}"</p>
        `;

        // Agregar la reseña al contenedor
        contenedorResenas.appendChild(nuevaResena);
    });
}

// Función para guardar una nueva reseña en LocalStorage
function enviarResena() {
    const libro = document.getElementById("libro").value;
    const autor = document.getElementById("autor").value;
    const calificacion = document.getElementById("calificacion").value;
    const comentario = document.getElementById("comentario").value;

    // Validar si todos los campos están llenos
    if (libro && autor && calificacion && comentario) {
        // Crear una nueva reseña como objeto
        const nuevaResenaObj = {
            libro: libro,
            autor: autor,
            calificacion: calificacion,
            comentario: comentario
        };

        // Obtener las reseñas existentes del LocalStorage
        const resenasGuardadas = JSON.parse(localStorage.getItem("resenas")) || [];

        // Agregar la nueva reseña al array
        resenasGuardadas.push(nuevaResenaObj);

        // Guardar el array actualizado en LocalStorage
        localStorage.setItem("resenas", JSON.stringify(resenasGuardadas));

        // Cargar las reseñas actualizadas en la página
        cargarResenas();

        // Limpiar el formulario después de enviar
        document.getElementById("formulario-resena").reset();
        alert("Reseña enviada con éxito");

        return false; // Evitar que la página se recargue
    } else {
        alert("Por favor, completa todos los campos antes de enviar la reseña.");
    }

    return false; // Para evitar que la página se recargue
}

// Función para buscar reseñas por libro o autor
function buscarResenas() {
    let input = document.getElementById("buscar").value.toLowerCase();
    let resenas = document.getElementsByClassName("resena");

    for (let i = 0; i < resenas.length; i++) {
        let libro = resenas[i].getAttribute("data-libro").toLowerCase();
        let autor = resenas[i].getAttribute("data-autor").toLowerCase();

        if (libro.includes(input) || autor.includes(input)) {
            resenas[i].style.display = "";
        } else {
            resenas[i].style.display = "none";
        }
    }
}

// Guardamos el título original de la página
const tituloOriginal = document.title;

// Función para detectar cuando el usuario cambia de pestaña
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Si el usuario deja la pestaña
        document.title = "¡ No te vayas 😭💔!";
    } else {
        // Cuando el usuario regresa a la pestaña
        document.title = tituloOriginal;
    }
});

// Cargar las reseñas almacenadas al cargar la página
window.onload = function() {
    cargarResenas();
};
