(function(){
    emailjs.init("lBJbvo9nZySXstAs1"); // Replace with your EmailJS public key
  })();

  function send_email(event) {
    event.preventDefault(); // stop form from refreshing

    const form = event.target;

    // Let browser validate first
    if (!form.checkValidity()) {
      form.reportValidity(); // shows the built-in messages
      return;
    }

    const parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs.send("service_j6ibkfi", "template_egluitu", parms)
      .then(function(response) {
        alert("Email Sent!");
        form.reset(); // clear inputs
      })
      .catch(function(error) {
        alert("Error sending email: " + error.text);
      });
  }
