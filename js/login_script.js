// Función para mostrar y ocultar contraseña del formulario de login y del registro
const EYE_OPEN_ICON = "../components/img/Login/login_eye_open.svg";
const EYE_CLOSED_ICON = "../components/img/Login/login_eye_closed.svg";

function togglePassword(inputId, eyeId) {
    const passwordField = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeId);

    if (!eyeIcon) {
        console.error(`Elementos no encontrados: ${eyeId}`);
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

document.addEventListener('DOMContentLoaded', function () {
    togglePassword('password', 'Eye_closed');
    togglePassword('password2', 'Eye_closed2');
});

//Aca empieza la conexion con el backend

// login_script.js
// Selecciona el formulario por su ID
const loginForm = document.getElementById('login-form');

// Agrega un evento 'submit' al formulario
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

    // Obtén los valores de los campos del formulario
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Formulario de login:', email, password);

    try {
        // Llama a tu API usando fetch
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password 
            }),
            credentials: 'include', 
        });

        console.log('Respuesta del servidor:', response);
        console.log('Estado del servidor:', response.status);

        if (!response.ok) {
            throw new Error('Error en la petición de login');
        }

        // Lee el token como texto
        const token = await response.text(); 
        console.log('Token:', token); 

        // Guarda el token (por ejemplo, en el localStorage)
        localStorage.setItem('token', token);

        // Redirige al usuario a la página principal o dashboard
        window.location.href = '/index.html';

    } catch (error) {
        console.error('Error durante el login:', error);
        alert('Hubo un problema con el login. Inténtalo nuevamente.');
    }
});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}