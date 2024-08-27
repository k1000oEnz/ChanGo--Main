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
