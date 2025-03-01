function Maseg(){

    alert("GO whatsapp and drop you maseg ");

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var email = document.getElementById("number").value;
    var message = document.getElementById("message").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "" || number.trim() === "") {
        alert("Please fill all fields before sending.");
        return;
    }

    var fullMessage = `Name: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`;

    var myPhoneNumber = "94775295373";
    var encodedMessage = encodeURIComponent(fullMessage);
    var whatsappURL = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    
}