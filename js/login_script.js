// Función para mostrar y ocultar contraseña del formulario de login y del registro
function togglePassword(inputId, eyeId) {
    var passwordField = document.getElementById(inputId);
    var eyeIcon = document.getElementById(eyeId);
    
    eyeIcon.addEventListener("click", function() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyeIcon.src = "../components/img/Login/login_eye_open.svg";
            eyeIcon.style.opacity = 0.8;
        } else {
            passwordField.type = "password";
            eyeIcon.src = "../components/img/Login/login_eye_closed.svg";
            eyeIcon.style.opacity = 1;
        }
    });
}

// Asigne la función a los íconos de ojo
togglePassword('password', 'Eye_closed');
togglePassword('password2', 'Eye_closed2');