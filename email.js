// RECEIVING DATA FROM CONTACT FORM THORUGH EMAIL
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    let params = {
      user_name: document.getElementById("user_name").value,
      user_email: document.getElementById("user_email").value,
      user_message: document.getElementById("user_message").value,
    };

    const serviceId = "service_p87p6oc";
    const templateId = "template_cxjrdxm";

    emailjs.send(serviceId, templateId, params).then(
      function (response) {
        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message was sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send your message. Please try again later.");
      }
    );
  });
