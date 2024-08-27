// enviar el formulario
var form = document.getElementById('paymentForm');
form.addEventListener("submit", function(event){
    event.preventDefault();
    if(validarFormulario()){
        alert('Pago procesado con éxito. Gracias por su compra!');
        form.reset();
    } 
});

// validar el formulario
function validarFormulario() {
        var tarjeta = document.getElementById('tarjeta').value.replace(/\s/g, '');
        if(tarjeta.length != 16){
            alert('El número de tarjeta debe tener 16 dígitos.');
            return false;
        }

    return true;
}