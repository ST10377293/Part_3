document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.getElementById("menu-toggle");
  var navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("open");
  });
});

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Get all image elements with a specific class
  var images = document.querySelectorAll(".fade-in-image");

  // Trigger the fade-in animation for each image when scrolling
  window.addEventListener("scroll", function () {
    images.forEach(function (image) {
      fadeInImage(image);
    });
    slideInCards();
  });
});

function fadeInImage(element) {
  // Get the distance of the element from the top of the viewport
  var elementTop = element.getBoundingClientRect().top;

  // Get the height of the viewport
  var viewportHeight = window.innerHeight;

  // If the element is visible in the viewport, fade it in from the left
  if (elementTop < viewportHeight) {
    element.style.opacity = 1;
    element.style.transform = "translateX(0)";
  }
}

// function fadeInHeading(element) {
//   element.style.opacity = 1;
// }

function slideInCards() {
  var cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    var cardPosition = card.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (cardPosition < windowHeight) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
}

function validateForm(){

  var validateName = document.getElementById('name').value;
  var validateEmail = document.getElementById('email').value;
    
  if(validateName == ""){
    alert("Please enter your name");
  }

  if(validateEmail.includes('@') && validateEmail.includes('.')){
    alert("Email sent");
  }
  else{
    alert("Not a valid email format");
  }
}

var formContainer = document.getElementById('newsletter-form');
var showFormButton = document.getElementById('show-form-btn');

showFormButton.addEventListener("click", function (){
  if(formContainer.style.display === "none"){
    formContainer.style.display = "block";
  }else{
    formContainer.style.display = "none";
  }
});
