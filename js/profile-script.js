document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const addTagBtn = document.querySelector('.add-tag');
    const tagsContainer = document.querySelector('.tags');
    const modalOverlay = document.querySelector('.modal-skills-overlay');
    const modalInput = document.querySelector('.modal-skills-input');
    const modalAddBtn = document.querySelector('.modal-skills-button');

    // Abrir el modal al hacer clic en "+ Agregar"
    addTagBtn.addEventListener('click', () => {
        modalOverlay.style.display = 'flex';
    });

    // Agregar la nueva aptitud al hacer clic en "Agregar" en el modal
    modalAddBtn.addEventListener('click', () => {
        const newTag = modalInput.value.trim();
        if (newTag) {
            const tagElement = document.createElement('span');
            tagElement.className = 'tag';
            tagElement.innerHTML = `<span class="close-tag"><img class="skill-close-btn" src="../components/img/Profile/close-md.svg" alt="close-btn"></span>${newTag}`; // Agregar la "x" aquí
            tagsContainer.insertBefore(tagElement, addTagBtn);
            modalInput.value = ''; // Limpiar el input
            modalOverlay.style.display = 'none'; // Cerrar el modal

            // Agregar evento para eliminar la etiqueta al hacer clic en la "x"
            tagElement.querySelector('.close-tag').addEventListener('click', () => {
                tagsContainer.removeChild(tagElement);
            });
        }
    });

    // Cerrar el modal al hacer clic fuera del contenido
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.style.display = 'none';
        }
    });

    // Agregar evento para eliminar etiquetas existentes al cargar la página
    const existingCloseButtons = document.querySelectorAll('.close-tag');
    existingCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tagElement = button.parentElement;
            tagsContainer.removeChild(tagElement);
        });
    });
});

// script.js
const openModalBtn = document.querySelector('.profile-open-modal-btn');
const modalOverlay = document.querySelector('.profile-modal-overlay');
const postBtn = document.querySelector('.profile-post-btn');
const postContent = document.querySelector('.profile-post-content');
const visibilityToggle = document.getElementById('visibility-toggle');
const visibilityStatus = document.getElementById('visibility-status');
const skillsDropdown = document.querySelector('.profile-skills-dropdown');

openModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('active');
});

// Event delegation for closing the modal
document.addEventListener('click', (e) => {
    if (e.target === modalOverlay || e.target.classList.contains('profile-close-btn')) {
        modalOverlay.classList.remove('active');
    }
});

visibilityToggle.addEventListener('change', () => {
    visibilityStatus.textContent = visibilityToggle.checked ? 'Buscador' : 'Prestador';
});

postBtn.addEventListener('click', async () => {
    const content = postContent.value.trim();
    const isPublic = visibilityToggle.checked;
    const selectedSkill = skillsDropdown.value;

    if (content && selectedSkill) {
        try {
            const response = await fetch('/api/posts', { // Replace with your actual endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    content,
                    isPublic,
                    skill: selectedSkill
                })
            });

            if (response.ok) {
                alert('Your post has been created!');
                // Reset the form
                postContent.value = '';
                visibilityToggle.checked = false;
                visibilityStatus.textContent = 'Private';
                skillsDropdown.selectedIndex = 0;
                modalOverlay.classList.remove('active');
            } else {
                const errorData = await response.json();
                alert(`Error: ${errorData.message || 'Could not create post'}`);
            }

        } catch (error) {
            console.error('Error posting:', error);
            alert('An error occurred. Please try again later.');
        }
    } else {
        alert('Please fill out all required fields.');
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

const imageUpload = document.getElementById('image-upload');
const imagePreviewContainer = document.querySelector('.image-preview-container');

imageUpload.addEventListener('change', (event) => {
    const files = event.target.files;
    imagePreviewContainer.innerHTML = ''; // Limpiar miniaturas previas

    for (const file of files) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.classList.add('image-preview'); // Agregar clase para estilos
            imagePreviewContainer.appendChild(img);
        }
        reader.readAsDataURL(file);
    }
});