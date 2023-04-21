const title = document.getElementById('title');
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenMembers = document.querySelectorAll('.member-hidden');

function titleClicked() {
  title.classList.add('clicked');
  setTimeout(() => title.classList.remove('clicked'), 3000);
}
// animate title on page load...
document.addEventListener('DOMContentLoaded', titleClicked);

//... and when title is clicked
title.addEventListener('click', titleClicked);

// animation effect on all section elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

// animation for band member photos
const memberObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('member-show');
    }
  });
});

hiddenMembers.forEach((el) => memberObserver.observe(el));

// slide menu
// Select the menu element
const menu = document.getElementById('menu');

// Add a mousemove event listener to the document
document.addEventListener('mousemove', function (event) {
  // Calculate the position of the mouse
  const mouseX = event.clientX;
  const viewportWidth = window.innerWidth;

  // Check if the mouse is in the left 5th of the viewport
  if (mouseX <= viewportWidth / 5) {
    // Add the 'open' class to the menu to slide it out
    menu.classList.add('open');
  } else {
    // Remove the 'open' class from the menu to slide it back in
    menu.classList.remove('open');
  }
});
