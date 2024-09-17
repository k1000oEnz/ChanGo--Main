const formElement = document.getElementById("registerForm");

formElement.addEventListener('submit', (e) => {
    e.preventDefault();

    let transactionInputName = document.getElementById('name').value;
    let transactionInputLastName = document.getElementById('apellido').value;
    let transactionInputUSer = document.getElementById('user').value;
    let transactionInputEmail = document.getElementById('email').value;
    let transactionPassword = document.getElementById('password').value;

    if (!transactionInputName || !transactionInputLastName || !transactionInputUSer || !transactionInputEmail || !transactionPassword) {
        alert('Todos los campos son obligatorios.');
        return;
    }

    let transactions = {
        user: transactionInputUSer,
        email: transactionInputEmail,
        name: transactionInputName,
        lastName: transactionInputLastName,
        password: transactionPassword
    }

    console.log(JSON.stringify(transactions));

    fetch('http://localhost:3000/transactions', {
        method: 'POST',
        body: JSON.stringify(transactions),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
