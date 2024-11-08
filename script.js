// script.js
const slideElements = document.querySelectorAll('.fh, .sh');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
    } 
    else {
        entry.target.classList.remove('visible'); // Optionally remove class when out of view
      }
  });
});
// Attach the observer to each slide-in element
slideElements.forEach(el => observer.observe(el));
function slideEffect() {
    const container = document.querySelector('.container');
    const textSection = document.getElementById('text-section');

  
    container.classList.toggle('active');

    
    if (container.classList.contains('active')) {
      
        textSection.querySelector('h1').textContent = "Dark Mode";
        textSection.querySelector('h4').textContent = "For Night-Time Reading";
    } else {
    
        textSection.querySelector('h1').textContent = "Light Mode";
        textSection.querySelector('h4').textContent = "For Daytime Reading";
    }
}
// Text to be typed
const text = "I am a Developer that has experience on making an app for android devices, making web pages and designing user interfaces, my skills as a programmer consists of using HTML, CSS, JavaScript, C# and React Native.  Currently an IT student at URSB (University of Rizal System- Binangonan) and currently a sophomore.  Developing and Designing is my passion and it is my most treasured skills that i will be proud to use in my career and will be proud to use if my services are requested.";
const typingSpeed = 10; // typing speed in milliseconds

let index = 0;
const cursorHtml = '<span class="cursor">|</span>'; // Add the cursor inside the text

function typeText() {
  if (index < text.length) {
    document.getElementById('introp').innerHTML = text.slice(0, index + 1) + cursorHtml;
    index++;
    setTimeout(typeText, typingSpeed);
  } else {
    // Ensure the cursor remains after typing ends
    document.getElementById('introp').innerHTML = text + cursorHtml;
  }
}

// Start typing when the page loads
window.onload = function() {
  typeText();
};
document.querySelectorAll('.language-card').forEach(card => {
  const tooltip = card.querySelector('.tooltip');
  const language = card.getAttribute('data-language');
  const level = card.getAttribute('data-level');
  tooltip.textContent = `${language}: ${level}`;
});
document.querySelectorAll('.service-card').forEach(card => {
  const tooltip = card.querySelector('.tooltip');
  const language = card.getAttribute('data-language');
  const level = card.getAttribute('data-level');
  tooltip.textContent = `${language}`;
});
function copyText() {
  // Text you want to copy
  const textToCopy = "09940284287";
  
  // Copy the text to the clipboard
  navigator.clipboard.writeText(textToCopy).then(() => {
    // Show confirmation message
    document.getElementById("confirmation").style.display = "block";
    
    // Optionally, hide the confirmation message after a few seconds
    setTimeout(() => {
      document.getElementById("confirmation").style.display = "none";
    }, 2000);
  }).catch((err) => {
    console.error("Could not copy text: ", err);
  });
}
let lastScrollPosition = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  // Get the current scroll position
  let currentScrollPosition = window.pageYOffset;

  // Check if scrolling up
  if (currentScrollPosition < lastScrollPosition) {
    navbar.style.top = "0"; // Show the navbar
  } else {
    navbar.style.top = "-80px"; // Hide the navbar (adjust -80px based on navbar height)
  }

  // Update the last scroll position
  lastScrollPosition = currentScrollPosition;
});
function redirectToNewTab() {
  window.open("https://drive.google.com/file/d/1Dqq3hXyA52wnksSWBJMitcPt59i3lvDD/view?usp=sharing", "_blank"); // Replace with your desired URL
}