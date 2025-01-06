// script.js
/*
gsap.registerPlugin(ScrollTrigger);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
} 

function revealSvgPathsOnScroll() {
  // Get all paths and set up a ScrollTrigger for each path
  const paths = gsap.utils.toArray(".path");

 shuffleArray(paths); 
  
  // Define the scroll container and its height
  const scrollContainer = document.querySelector(".p_container");
  const containerHeight = scrollContainer.scrollHeight;

  // Define the stagger duration based on the number of paths
  const staggerDuration = 0.02; // Adjust this value for desired stagger effect
  
  paths.forEach((path, index) => {
    // Create a ScrollTrigger for each path
    gsap.fromTo(path, 
      { opacity: 0 }, 
      { 
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: scrollContainer,
          start: `top+=${index * staggerDuration * 100} top`, // Adjust start position for staggering
          end: `bottom+=${(index + 1) * staggerDuration * 100} bottom`, // Adjust end position for staggering
          scrub: true,
          markers: false // Optional: enable markers to see start and end points
        }
      }
    );
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const svgElement = document.querySelector("svg");
  if (svgElement) {
    svgElement.style.visibility = "visible"; // Show the SVG once it's fully parsed
  }


// Initialize the sequential reveal based on scroll
revealSvgPathsOnScroll();

});

*/

gsap.registerPlugin(ScrollTrigger);



function revealSvgPathsOnScroll() {
  // Get all paths and set up a ScrollTrigger for each path
  const paths = gsap.utils.toArray(".path");
  gsap.set(paths, { opacity: 0 });
  const scrollContainer = document.querySelector(".p_container");
  const containerHeight = scrollContainer.scrollHeight;


  // Define the stagger duration based on the number of paths
  const staggerDuration = 0.055; // Adjust this value for desired stagger effect

  paths.forEach((path, index) => {
    // Create a ScrollTrigger for each path
    ScrollTrigger.create({
      trigger: scrollContainer,
      start: `top+=${index * staggerDuration * 100} top`, // Adjust start position for staggering
      end: `bottom+=${(index + 1) * staggerDuration * 100} bottom`, // Adjust end position for staggering
      onEnter: () => gsap.set(path, { opacity: 1 }),
      onLeaveBack: () => gsap.set(path, { opacity: 0 }),
      scrub: true,
      markers: false // Optional: enable markers to see start and end points
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  const svgElement = document.querySelector("svg");
  if (svgElement) {
    svgElement.style.visibility = "visible"; // Show the SVG once it's fully parsed
  }

  // Initialize the sequential reveal based on scroll
  revealSvgPathsOnScroll();

  //Image Fade in
  
            const images = document.querySelectorAll('#roughCut, #shaping, #sanding');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            images.forEach(image => observer.observe(image));


});  
