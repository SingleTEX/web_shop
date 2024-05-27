document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginButton');
    const responseDiv = document.getElementById('response');

    loginButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default button action

        const username = document.getElementById('username').value;
        const password = document.getElementById('psw').value;

        const formData = new FormData();
        formData.append('username', username);
        formData.append('psw', password);

        fetch('login.php', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                // This block will handle non-200 responses
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            responseDiv.innerHTML = data; // Display the response from PHP
        })
        .catch(error => {
            console.error('Fetch error:', error);
            responseDiv.innerHTML = `<h4>An error occurred. Please try again later. Error: ${error.message}</h4>`;
        });
    });
});
