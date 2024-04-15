
(function() {
    emailjs.init('W1noIBsBbAHNENOw7'); // Replace 'YOUR_USER_ID' with your EmailJS user ID

    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault();

        // Collect the user input
        var formData = {
            from_name: document.getElementById('name').value,
            user_email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send the email
        emailjs.send('service_hwk95rn', 'template_vke6otj', formData)
            .then(function(response) {
                alert('Your message has been sent successfully!');
                document.getElementById('contact-form').reset(); // Reset the form after successful submission
            }, function(error) {
                console.error('Failed to send email. Error:', error);
                alert('Oops! Something went wrong. Please try again later.');
            });
    });
})();

