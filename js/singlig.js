document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons and forms
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const cancelBtn = document.getElementById('cancelBtn');

    // Add click event listeners to the buttons
    loginBtn.addEventListener('click', function() {
        // Hide sign up form
        signupForm.style.display = 'none';
        // Show login form
        loginForm.style.display = 'block';
    });

    signupBtn.addEventListener('click', function() {
        // Hide login form
        loginForm.style.display = 'none';
        // Show sign up form
        signupForm.style.display = 'block';
    });

    cancelBtn.forEach(function(cancelBtn) {
        cancelBtn.addEventListener('click', goToIndexPage);
    });

});

