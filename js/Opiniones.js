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

// Función para enviar una nueva reseña
function enviarResena() {
    const libro = document.getElementById("libro").value;
    const autor = document.getElementById("autor").value;
    const calificacion = document.getElementById("calificacion").value;
    const comentario = document.getElementById("comentario").value;

    if (libro && autor && calificacion && comentario) {
        const contenedorResenas = document.getElementById("contenedor-resenas");
        const nuevaResena = document.createElement("div");
        nuevaResena.classList.add("resena");
        nuevaResena.setAttribute("data-libro", libro);
        nuevaResena.setAttribute("data-autor", autor);

        // Crear la nueva reseña
        nuevaResena.innerHTML = `
            <h3>${libro} - ${autor}</h3>
            <p class="calificacion">${"⭐".repeat(calificacion)}</p>
            <p>"${comentario}"</p>
        `;

        // Agregar la nueva reseña
        contenedorResenas.appendChild(nuevaResena);

        // Limpiar el formulario
        document.getElementById("formulario-resena").reset();
        alert("Reseña enviada con éxito");

        return false; // Para evitar que la página se recargue
    }
    return true;
}


// Guardamos el título original
const tituloOriginal = document.title;

// Función para detectar cuando el usuario cambia de pestaña
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Si el usuario sale de la pestaña
        document.title = "¡ No te vayas 😭💔!";
    } else {
        // Si el usuario regresa a la pestaña
        document.title = tituloOriginal;
    }
});

