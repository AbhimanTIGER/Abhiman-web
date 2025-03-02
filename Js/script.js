function Maseg(){



    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "" || phone.trim() === "" ) {
        alert("Please fill all fields before sending.");
        return;
    }

    alert("Go Whatsapp & Drop you maseg now");

    var fullMessage = `Name: ${name}\nEmail: ${email}\nTel: ${phone}\nMessage: ${message}`;

    var myPhoneNumber = "+94775295373";
    var encodedMessage = encodeURIComponent(fullMessage);
    var whatsappURL = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`; 
    window.open(whatsappURL, "_blank");
}