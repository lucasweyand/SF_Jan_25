// Select the SVG element
const landingWrapper = document.querySelector(".landingWrapper");

// Check if the animation has already been shown in this session
if (!sessionStorage.getItem("animationPlayed")) {
  // Select all paths inside the SVG
  const paths = document.querySelectorAll("svg path");

  // Fade in each path with staggered timing
  gsap.fromTo(paths, 
    { opacity: 0 }, // Start state
    { 
      opacity: 1,    // End state
      duration: 0.001,   // Duration for each path fade-in
      stagger: 0.01,  // Delay each path slightly
      ease: "power2.inOut", // Smooth easing
      onComplete: () => {
        // After all paths have faded in, fade the landingWrapper out
        gsap.to(landingWrapper, {
          opacity: 0,
          scale: 1,  // Scale the landingWrapper to 15 times
          duration: 0.5, // Fade-out duration
          delay: 0.3, // Delay before starting the fade-out
          ease: "power2.inOut",
          onComplete: () => {
            landingWrapper.style.display = 'none'; // Set display to none after the animation
            sessionStorage.setItem("animationPlayed", "true"); // Mark animation as played
          }
        });
      }
    }
  );
} else {
  // If the animation has already played, hide the landingWrapper immediately
  landingWrapper.style.display = 'none';
}
