function Maseg(){
    
    // 🟢 Form එකෙන් data එක ගන්න
    var name = document.getElementById("name").value; // Name field එකේ value එක ගන්න
    var email = document.getElementById("email").value; // Email field එකේ value එක ගන්න
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value; // Message field එකේ value එක ගන්න

    // 🔴 Empty fields check කරනවා
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill all fields before sending."); // Empty නම් alert එකක් පෙන්වනවා
        return; // Function එක අවසන් කරනවා (message එක යැවීම නවත්වනවා)
    }

    // 🟡 User එක enter කරපු data එක message එකක් වශයෙන් සකස් කරනවා
    var fullMessage = `Name: ${name}\nEmail: ${email}\nTel: ${phone}\nMessage: ${message}`;

    // 🟢 Method 1: WhatsApp එකට message එක යැවීම
    var myPhoneNumber = "+94775295373"; // ඔබේ WhatsApp අංකය (94 country code සමඟ)
    var encodedMessage = encodeURIComponent(fullMessage); // Message එක encode කරනවා
    var whatsappURL = `https://wa.me/${myPhoneNumber}?text=${encodedMessage}`; // WhatsApp URL එක සාදනවා
    window.open(whatsappURL, "_blank");
}