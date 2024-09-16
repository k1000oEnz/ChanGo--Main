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

    // Initialize job cards visibility
    // const jobCards = document.querySelectorAll('.job-card');
    // jobCards.forEach((card, index) => {
    //     if (index >= jobsVisible) {
    //         card.style.display = 'none';
    //     }
    // });
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
    }
});