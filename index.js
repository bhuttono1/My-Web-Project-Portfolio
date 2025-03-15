// TYPING JS Link //
"https://unpkg.com/typed.js@2.0.16/dist/typed.umd.js";
//-- ----- SCROLL REVEAL JS Link----- -//
"https://unpkg.com/scrollreveal";

// Function of Navigation //

function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// ------ Dark mode ------//

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Youtuber", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

// ---- Scroll animition ---- //

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

// Form Submissions //

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
}
const serviceId = "service_p87p6oc";
const templateId = "template_cxjrdxm";

emailjs
  .send(serviceId, templateId, params)
  .then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Your message sent Successfully");
  })

  .catch((error) => console.log(error));

window.addEventListener("scroll", scrollActive);
