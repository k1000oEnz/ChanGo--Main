// enviar el formulario
var form = document.getElementById('paymentForm');
form.addEventListener("submit", function(event){
    event.preventDefault();
    if(validarFormulario()){
        alert('Pago procesado con éxito. Gracias por su compra!');
        form.reset();
    } else {
        alert('Por favor, revise los campos del formulario.');
    }
});

// validar el formulario
function validarFormulario() {
    var campos = ['titular', 'tarjeta', 'vencimiento', 'cvv'];
    var esValido = true;

    for(var i = 0; i < campos.length; i++){
        var campo = document.getElementById(campos[i]);
        if(campo.value.trim() == ''){
            alert('Por favor, complete el campo ' + campos[i] + '.');
            esValido = false;
            break;
        }
    }

    if(esValido){
        var tarjeta = document.getElementById('tarjeta').value.replace(/\s/g, '');
        if(tarjeta.length != 16){
            alert('El número de tarjeta debe tener 16 dígitos.');
            esValido = false;
        }
    }

    return esValido;
}