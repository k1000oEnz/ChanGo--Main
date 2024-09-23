// Función para mostrar y ocultar contraseña del formulario de login y del registro
const EYE_OPEN_ICON = "../components/img/Login/login_eye_open.svg";
const EYE_CLOSED_ICON = "../components/img/Login/login_eye_closed.svg";

function togglePassword(inputId, eyeId) {
    const passwordField = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeId);

    if (!passwordField || !eyeIcon) {
        console.error(`Elementos no encontrados: ${inputId} o ${eyeId}`);
        return;
    }

    function toggle() {
        if (passwordField.type === "password") {
            passwordField.type = "text";
            eyeIcon.src = EYE_OPEN_ICON;
            eyeIcon.style.opacity = 0.8;
        } else {
            passwordField.type = "password";
            eyeIcon.src = EYE_CLOSED_ICON;
            eyeIcon.style.opacity = 1;
        }
    }

    eyeIcon.addEventListener("click", toggle);
}

togglePassword('password', 'Eye_closed');
togglePassword('password2', 'Eye_closed2');

//Aca empieza la conexion con el backend
