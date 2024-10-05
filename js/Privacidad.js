document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad para la ventana de cookies
    const cookieConsentContainer = document.getElementById('cookieConsentContainer');
    const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');

    // Mostrar la ventana de cookies si no ha sido aceptada
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieConsentContainer.classList.add('show');
    }

    // Al hacer clic en el botón, ocultar la ventana y guardar la elección
    acceptCookiesBtn.addEventListener('click', function() {
        cookieConsentContainer.classList.remove('show');
        localStorage.setItem('cookiesAccepted', 'true');
    });

    // Funcionalidad de acordeón (secciones colapsables)
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling; // Obtener la siguiente sección de contenido

            // Alternar la visibilidad de la sección
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
            
            // Alternar la clase 'active' en el encabezado
            this.classList.toggle('active');
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad para la ventana de cookies
    const cookieConsentContainer = document.getElementById('cookieConsentContainer');
    const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');

    // Siempre mostrar la ventana de cookies al cargar la página
    cookieConsentContainer.classList.add('show');

    // Al hacer clic en "Aceptar", ocultar la ventana
    acceptCookiesBtn.addEventListener('click', function() {
        cookieConsentContainer.classList.remove('show');
    });
});