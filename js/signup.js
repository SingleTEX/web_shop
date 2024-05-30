document.addEventListener('DOMContentLoaded', function () {


    document.getElementById('signupButton').addEventListener('click', function () {
        const fname = document.getElementById('firstname').value;
        const lname = document.getElementById('lastname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('psw').value;
    
        const data = { fname, lname, username, email, password };
    
        fetch('signup.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            // handle the response data
        })
        .catch(error => {
            console.error('Fetch error:', error);
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
        fetch('./login.php', {
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
