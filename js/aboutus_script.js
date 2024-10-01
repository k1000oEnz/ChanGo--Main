document.addEventListener('DOMContentLoaded', () => {
    const profileBtn = document.getElementById('profileBtn');
    const followBtn = document.getElementById('followBtn');

    profileBtn.addEventListener('click', () => {
        // goto profile
        console.log('Profile button clicked');
    });

    followBtn.addEventListener('click', () => {
        // follow account
        console.log('Follow button clicked');
    });
});