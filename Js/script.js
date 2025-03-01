document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || phone.trim() === "" || message.trim() === "") {
        alert("Please fill all fields before sending.");
        return;
    }

    var fullMessage = `Name : ${name}\nNumber : ${phone}\nEmail : ${email}\nMessage : ${message}`;

    var myPhoneNumber = "94775295373";
    var encodedMessage = encodeURIComponent(fullMessage);
    var whatsappURL = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

});
