document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('http://localhost:8090/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('responseMessage').innerText = data.message;
        document.getElementById('contactForm').reset();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('responseMessage').innerText = 'An error occurred. Please try again.';
    });
});
