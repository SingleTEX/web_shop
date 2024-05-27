document.addEventListener("DOMContentLoaded", function() {
    // Get references to the buttons and forms
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const cancelBtns = document.querySelectorAll('.cancelBtn'); // Assume cancelBtn has class 'cancelBtn'

    // Function to go to the index page
    function goToIndexPage() {
        window.location.href = 'index.html';
    }

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

    // Add click event listeners to each cancel button
    if (cancelBtns.length > 0) {
        cancelBtns.forEach(function(cancelBtn) {
            cancelBtn.addEventListener('click', goToIndexPage);
        });
    } else {
        console.error('No elements with class "cancelBtn" found.');
    }
});
