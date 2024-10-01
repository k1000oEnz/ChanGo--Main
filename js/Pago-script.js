document.addEventListener('DOMContentLoaded', function() {
const paymentForm = document.getElementById('paymentForm');

// Pasos
const step1 = document.querySelector('#step1');
const step2 = document.querySelector('#step2');
step2.style.display = 'none';

// función continuar
document.getElementById('nextStep').addEventListener('click', function() {
    if (step1.querySelectorAll('input:invalid').length === 0) {
    step1.style.display = 'none';
    step2.style.display = 'block';}
else {
    paymentForm.reportValidity();}
});

// Función volver
document.getElementById('prevStep').addEventListener('click', function() {
    step2.style.display = 'none';
    step1.style.display = 'block';
});

// Para el envío del formulario
paymentForm.addEventListener('submit', function(event) {
    if (!paymentForm.checkValidity()) {
        event.preventDefault(); 
        paymentForm.reportValidity(); 
    } else {
        alert('Pago procesado con éxito. Gracias por su compra!');
        paymentForm.reset();
        step2.style.display = 'none';
        step1.style.display = 'block';
    }
});

});