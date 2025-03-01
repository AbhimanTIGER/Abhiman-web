        // EmailJS Setup
        (function() {
            emailjs.init( ZpKDpI8nIH_D5YqCn );
        })();

        // Form Submit Event Listener
        const form = document.getElementById("contact-form");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            // Form Fields
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            // Send Email using EmailJS
            emailjs.send( service_ldh54m4, template_75l8i3d, {
                name: name,
                email: email,
                phone: phone,
                message: message
            })
            .then(function(response) {
                alert("Message sent successfully!");
            }, function(error) {
                alert("Failed to send message. Please try again.");
            });
        });
