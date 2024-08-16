// Funcion para mostrar y ocultar contraseña
var eye = document.getElementById('Eye_closed');
var password = document.getElementById('password');
eye.addEventListener("click", function(){
    if(password.type == "password"){
        password.type = "text";
        eye.src = "../components/img/Login/login_eye_open.svg";
        eye.style.opacity=0.8;
    }else{
        password.type = "password";
        eye.src = "../components/img/Login/login_eye_closed.svg";
        eye.style.opacity=1;
    }
})
