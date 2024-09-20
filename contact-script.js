// Get the form and status div
const contactForm = document.getElementById('contactForm');
const statusDiv = document.getElementById('status');

// Add an event listener to the form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name === '' || email === '' || message === '') {
        statusDiv.textContent = 'Please fill out all fields!';
        statusDiv.style.color = 'red';
    } else {
        statusDiv.textContent = 'Message sent successfully!';
        statusDiv.style.color = 'green';

        // Reset the form after submission
        contactForm.reset();
    }
});
