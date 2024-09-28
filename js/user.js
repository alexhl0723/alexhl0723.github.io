// user.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('toggle-password');
    const messageDiv = document.getElementById('message');
    const continueWithoutLoginBtn = document.getElementById('continue-without-login');

    // Verificar si el usuario ya está autenticado
    if (localStorage.getItem('isAuthenticated')) {
        window.location.href = '/index.html';
        return;
    }

    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.textContent = type === 'password' ? '👁️' : '🔒';
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = passwordInput.value;

        // Simular verificación de credenciales
        if (email === "zzztitabro@gmail.com" && password === "123456789") {
            messageDiv.textContent = "Inicio de sesión exitoso. Redirigiendo...";
            messageDiv.className = "success";

            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('userEmail', email);

            setTimeout(function() {
                window.location.href = '/index.html';
            }, 1500);
        } else {
            messageDiv.textContent = "Correo electrónico o contraseña incorrectos. Por favor, intenta de nuevo.";
            messageDiv.className = "error";
        }
    });

    continueWithoutLoginBtn.addEventListener('click', function() {
        localStorage.setItem('continueWithoutLogin', 'true');
        window.location.href = '/index.html';
    });
});