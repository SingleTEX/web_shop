document.addEventListener("DOMContentLoaded", function() {

    const generalBtn = document.getElementById('generalButton');
    const profileBtn = document.getElementById('profileButton');
    const generalDis = document.getElementById('generalForm');
    const profileDis = document.getElementById('profileForm');

    generalDis.style.display = 'none';
    profileDis.style.display = 'none';

    generalBtn.addEventListener('click', function() {
        // Hide sign up form
        profileDis.style.display = 'none';
        // Show login form
        generalDis.style.display = 'block';
    });

    profileBtn.addEventListener('click', function() {
        // Hide login form
        generalDis.style.display = 'none';
        // Show sign up form
        profileDis.style.display = 'block';
    });
 

});