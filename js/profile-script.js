document.addEventListener('DOMContentLoaded', function() {
    // Add tag functionality
    const addTagBtn = document.querySelector('.add-tag');
    const tagsContainer = document.querySelector('.tags');

    addTagBtn.addEventListener('click', function() {
        const newTag = prompt('Ingrese una nueva aptitud:');
        if (newTag) {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.textContent = newTag;
            tagsContainer.insertBefore(tagElement, addTagBtn);
        }
    });

    // "Ver más" button functionality
    const verMasBtn = document.querySelector('.ver-mas');
    let jobsVisible = 2;

    verMasBtn.addEventListener('click', function() {
        const jobCards = document.querySelectorAll('.job-card');
        for (let i = jobsVisible; i < jobsVisible + 2 && i < jobCards.length; i++) {
            jobCards[i].style.display = 'flex';
        }
        jobsVisible += 2;

        if (jobsVisible >= jobCards.length) {
            verMasBtn.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const transferenciaBtn = document.getElementById('transferencia');
    const efectivoBtn = document.getElementById('efectivo');

    // Seleccionar las secciones de información
    const transferenciaInfo = document.getElementById('transferenciaInfo');
    const efectivoInfo = document.getElementById('efectivoInfo');
    
    //para Transferencia Bancaria
    transferencia.addEventListener('click', function () {
    transferenciaInfo.style.display = 'block';  
    efectivoInfo.style.display = 'none';        
    setActiveButton(transferencia);          
    });

    //para Efectivo
    efectivo.addEventListener('click', function () {
    efectivoInfo.style.display = 'block';       
    transferenciaInfo.style.display = 'none';   
    setActiveButton(efectivo);               
    });

    // seleiconar  boton
    function setActiveButton(activeButton) {
    
    const buttons = document.querySelectorAll('.payment-buttons button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    activeButton.classList.add('active');
    }
});
