
// hero image fade in and grow
document.addEventListener('DOMContentLoaded', function() {
  const heroImage = document.querySelector('.hero img');

  if (heroImage) {
    heroImage.onload = function() {
      heroImage.classList.add('loaded');
    };
    
    // In case the image is cached and the `onload` event does not fire
    if (heroImage.complete) {
      heroImage.classList.add('loaded');
    }
  }

//change nav color
  const header = document.querySelector('header');
  const menu = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav');
  const close = document.getElementById('close');

  if (header && menu) {
    const headerHeight = header.offsetHeight;

    window.addEventListener('scroll', () => {
      if (window.scrollY > (headerHeight-110)) {
        menu.classList.add('scrolled');
      } else {
        menu.classList.remove('scrolled');
      }
    });
  } 
//Nav menu toggle 
    menu.addEventListener('click', () => {
      navMenu.classList.add('open');
    });

    close.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });

// Close the nav menu when the mouse leaves the nav element
  navMenu.addEventListener('mouseleave', () => {
  navMenu.classList.remove('open');
  });

 


//Furniture dropdown
const dropdown = document.querySelector('.dropdown > a');
const dropdownContent = document.querySelector('.dropdown-content');  

dropdown.addEventListener('click', function(event) {
  event.preventDefault();
  dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('click', function(event) {
  if (!dropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
});

//scroll hint 
window.addEventListener('scroll', function() {
  const verticalLine = document.querySelector('.vertical-line');

  if (window.scrollY > 0) {
      verticalLine.style.opacity = '0'; // Fade out if scrolled
  }
});

//mouse over Pareuko Chair !!order matters!!
  document.getElementById('pareukoChair').addEventListener('mouseover', function() {
    document.getElementById('sketch_1').style.opacity = '1';
  });

  document.getElementById('pareukoChair').addEventListener('mouseout', function() {
    document.getElementById('sketch_1').style.opacity = '0';
  });

 

  //Mouse over Pangyo Stools 
  document.getElementById('pangyo').addEventListener('mouseover', function () {
    document.getElementById('sketch_3').style.opacity = '1';
  });

  document.getElementById('pangyo').addEventListener('mouseout', function () {
    document.getElementById('sketch_3').style.opacity = '0';
  });

  //Mouse over Oreno Stools
  document.getElementById('Oreno').addEventListener('mouseover', function () {
    document.getElementById('sketch_4').style.opacity = '1';
  });

  document.getElementById('Oreno').addEventListener('mouseout', function () {
    document.getElementById('sketch_4').style.opacity = '0';
  });

//fade PRINCIPLE Images in
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      // Optionally, unobserve the image if you don't want to re-trigger the animation
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 }); // Adjust threshold as needed

document.querySelectorAll('.principles-image img').forEach(img => {
  observer.observe(img);
});

//Toggle + - in dropdown
document.getElementById("togglePlus").addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link action
  const symbol = this.querySelector(".toggleSymbol");
  symbol.textContent = symbol.textContent === "+" ? "-" : "+";
});









});











