gsap.registerPlugin(ScrollTrigger);


function revealSvgPathsOnScroll() {
  // Get all paths and set up a ScrollTrigger for each path
  const paths = gsap.utils.toArray(".path");
  gsap.set(paths, { opacity: 0 });
  const scrollContainer = document.querySelector(".pro_sub");
  const containerHeight = scrollContainer.scrollHeight;


  // Define the stagger duration based on the number of paths
  const staggerDuration = 0.04; // Adjust this value for desired stagger effect

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

});  


/* SECOND ANIMATION SECOND ANIMATION*/
gsap.registerPlugin(ScrollTrigger);

const images = document.querySelectorAll(".pro_images img");
const totalImages = images.length;

// Initially, hide all images except the first one
images.forEach((img, i) => {
  img.style.display = i === 0 ? 'block' : 'none';
});

images.forEach((img, i) => {
  gsap.to(img, {
    scrollTrigger: {
      trigger: "#CADWrapper",
      start: () => `top+=${i * 100} bottom`, // Adjusting the start position
      end: () => `top+=${(i + 1) * 100} bottom`, // Adjusting the end position
      scrub: true,
      pin: "#CADWrapper", // Pinning the image wrapper
      anticipatePin: 1,
      onEnter: () => {
        img.style.display = 'block'; // Show the current image
      },
      onLeave: () => {
        img.style.display = 'none'; // Hide the current image after scroll passes
      },
      onEnterBack: () => {
        img.style.display = 'block'; // Ensure the image is shown again on scroll back
      },
      onLeaveBack: () => {
        img.style.display = 'none'; // Hide the image again on reverse scroll
      }
    },
    ease: "none"
  });


});

