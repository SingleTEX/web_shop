document.addEventListener('DOMContentLoaded', function () {
    const signupButton = document.getElementById('signupButton');

    signupButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        // Collect form data
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const psw = document.getElementById('psw').value;

        // Create a data object to send
        const data = { firstname, lastname, username, email, psw };

        // Send data to PHP script using fetch
        fetch('signup.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                document.getElementById('response').textContent = result.message;
            })
            .catch(error => {
                console.error('Fetch error:', error);
                document.getElementById('response').textContent = 'Error: ' + error.message;
            });
    });



    document.getElementById('loginButton').addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        // Collect form data
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Create a data object to send
        const data = { username, password };

        // Send data to PHP script using fetch
        fetch('php/login.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                document.getElementById('response').textContent = result.message;
            })
            .catch(error => console.error('Error:', error));
    });
});
