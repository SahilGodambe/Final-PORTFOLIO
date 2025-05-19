document.getElementById("menu").addEventListener("click", function() {
    document.querySelector(".links").classList.toggle("active");
});

function sendMail(){
    let parms = { 
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_5l4ftna", "template_wb8p454", parms)
    .then(function(response) {
        alert("Your message has been sent successfully!");
        console.log("SUCCESS", response);
    }, function(error) {
        alert("Failed to send message. Check console for errors.");
        console.log("ERROR", error);
    });
}
