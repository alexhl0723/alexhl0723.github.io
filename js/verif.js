// auth.js
function checkAuth() {
    const userInfo = document.getElementById('user-info');
    const logoutBtn = document.getElementById('logout_btn');

    // Verificar si el usuario está autenticado o si ha elegido continuar sin iniciar sesión
    if (!localStorage.getItem('isAuthenticated') && !localStorage.getItem('continueWithoutLogin')) {
        window.location.href = '../pages/user.html';
        return;
    }

    // Mostrar información del usuario si está autenticado
    if (localStorage.getItem('isAuthenticated')) {
        const userEmail = localStorage.getItem('userEmail');
        userInfo.textContent = `Usuario conectado: ${userEmail}`;
    } else {
        // Si el usuario no está autenticado, indicar que es un usuario visitante
        userInfo.textContent = `Usuario visitante: Navegando sin iniciar sesión`;
        if (logoutBtn) {
            logoutBtn.style.display = 'none'; // Ocultar el botón de cierre de sesión
        }
    }

    // Manejar cierre de sesión
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            localStorage.removeItem('isAuthenticated');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('continueWithoutLogin');
            window.location.href = '../pages/user.html';
        });
    }
}

// Ejecutar la función de verificación cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', checkAuth);