document.addEventListener("DOMContentLoaded", function() {
    
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const cancelBtns = document.querySelectorAll('.cancelBtn'); 

    function goToIndexPage() {
        window.location.href = 'index.html';
    }

    loginBtn.addEventListener('click', function() {
       
        signupForm.style.display = 'none';
       
        loginForm.style.display = 'block';
    });

    signupBtn.addEventListener('click', function() {
        
        loginForm.style.display = 'none';
        
        signupForm.style.display = 'block';
    });

   
    if (cancelBtns.length > 0) {
        cancelBtns.forEach(function(cancelBtn) {
            cancelBtn.addEventListener('click', goToIndexPage);
        });
    } else {
        console.error('No elements with class "cancelBtn" found.');
    }
});
