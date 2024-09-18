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
        textColor = 'black';//si algo malo pasa cambiar esto por white
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

function agregarAlCarrito(nombre, precio, autor, imagen) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let item = carrito.find(i => i.nombre === nombre);
    if (item) {
        item.cantidad++;
    } else {
        carrito.push({ nombre, precio, autor, imagen, cantidad: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarIconoCarrito();
}

// Función para actualizar el número de items en el icono del carrito
function actualizarIconoCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let total = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    let iconoCarrito = document.querySelector('.fa-cart-shopping');
    if (iconoCarrito) {
        iconoCarrito.setAttribute('data-count', total);
    }
}

// Función para mostrar los items en la página del carrito
function mostrarCarrito() {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let cartItems = document.querySelector('.cart-items');
    let subtotal = 0;

    cartItems.innerHTML = '<h1>Tu Carrito de Compras</h1>';

    carrito.forEach(item => {
        subtotal += item.precio * item.cantidad;
        cartItems.innerHTML += `
            <div class="item">
                <img src="${item.imagen}" alt="${item.nombre}" class="item-image">
                <div class="item-details">
                    <h3>${item.nombre}</h3>
                    <p>$${item.precio}</p>
                    <p>${item.autor}</p>
                </div>
                <div class="quantity-control">
                    <button class="quantity-btn" onclick="cambiarCantidad('${item.nombre}', -1)">-</button>
                    <span class="quantity-display">${item.cantidad}</span>
                    <button class="quantity-btn" onclick="cambiarCantidad('${item.nombre}', 1)">+</button>
                </div>
            </div>
        `;
    });

    document.querySelector('.summary-row:first-child span:last-child').textContent = `$${subtotal.toFixed(2)}`;
    document.querySelector('.summary-row:last-child span:last-child').textContent = `$${subtotal.toFixed(2)}`;
}

// Función para cambiar la cantidad de un item en el carrito
function cambiarCantidad(nombre, cambio) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let item = carrito.find(i => i.nombre === nombre);
    if (item) {
        item.cantidad += cambio;
        if (item.cantidad <= 0) {
            carrito = carrito.filter(i => i.nombre !== nombre);
        }
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
    actualizarIconoCarrito();
}

// Inicializar el carrito al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarIconoCarrito();
    if (window.location.pathname.includes('carrito.html')) {
        mostrarCarrito();
    }
});

// Agregar event listeners a los botones de compra en la página principal
document.querySelectorAll('.comprar-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        let read = e.target.closest('.read');
        let nombre = read.querySelector('.name').textContent;
        let autor = read.querySelector('.autor').textContent;
        let precio = 20.99; // Asumimos un precio fijo, ajusta según sea necesario
        let imagen = read.querySelector('img').src;
        agregarAlCarrito(nombre, precio, autor, imagen);
    });
});
// Cambiar el título de la página cuando el usuario cambia de pestaña
let previoTitle = document.title;
window.addEventListener('blur', ()=>{
    previoTitle= document.title;
    document.title = '¡Vuelve bro necesito comer 👻!'; //el nombre
})
window.addEventListener('focus', ()=>{
    document.title = previoTitle;
})
