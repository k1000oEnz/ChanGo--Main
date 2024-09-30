

const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    // 1. Obtener valores del formulario
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;

    // 2. Validaciones básicas 
    if (password !== password2) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    // 3. Preparar datos para enviar al backend
    const userData = {
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        password: password,
    };

    // 4. Enviar la solicitud al backend
    try {
        const response = await fetch('http://localhost:3000/users', { // Ajusta la ruta si es necesario
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        // 5. Manejar la respuesta del servidor
        if (response.ok) {
            const newUser = await response.json(); // Obtener los datos del nuevo usuario (sin la contraseña)
            alert(`¡Usuario ${newUser.username} registrado con éxito!`);
            // Redirigir a la página de inicio de sesión u otra página
            window.location.href = '/page/login.html';   
        } else {
            const errorData = await response.json();
            // Mostrar un mensaje de error al usuario
            alert(`Error al registrar: ${errorData.message}`);
        }

    } catch (error) {
        console.error('Error en la solicitud fetch:', error);
        alert('Hubo un problema al procesar la solicitud. Por favor, inténtalo de nuevo.');
    }
}); 