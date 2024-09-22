 // Mostrar el modal
 document.getElementById('acceptTermsBtn').addEventListener('click', function() {
    alert('Has aceptado los términos y condiciones.');
    document.getElementById('termsModal').style.display = 'none';
});

// Cerrar el modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('termsModal').style.display = 'none';
});

// Mostrar el modal cuando la página se carga
window.onload = function() {
    document.getElementById('termsModal').style.display = 'block';
};

// Funcionalidad de acordeón
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', function() {
        let content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Barra de progreso de lectura
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("progress").style.width = scrolled + "%";
};