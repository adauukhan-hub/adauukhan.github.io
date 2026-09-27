const form = document.getElementById("contactForm");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".navbar nav");


/* CONTACT FORM */

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();

});


/* MOBILE MENU */

menuToggle.addEventListener("click", function() {

    nav.classList.toggle("active");

});


/* CLOSE MOBILE MENU */

nav.querySelectorAll("a").forEach(function(link) {

    link.addEventListener("click", function() {

        nav.classList.remove("active");

    });

});