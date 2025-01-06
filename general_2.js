

document.addEventListener('DOMContentLoaded', function() {
  const heroImage = document.querySelector('.hero img');
//scale hero image
  if (heroImage) {
    heroImage.onload = function() {
      heroImage.classList.add('loaded');
    };
    
    // In case the image is cached and the `onload` event does not fire
    if (heroImage.complete) {
      heroImage.classList.add('loaded');
    }
  }


// scrol hint fade out
const verticalLine = document.getElementById('verticalLine');

  function handleScroll() {
    if (window.scrollY > 0) { // Check if the page has been scrolled vertically
      verticalLine.style.transition = 'opacity 1s ease'; // Ensure smooth transition
      verticalLine.style.opacity = '0'; // Fade out the vertical line
      window.removeEventListener('scroll', handleScroll); // Remove the scroll event listener after the effect
    }
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

 //Nav behavior

/*
//NAV SHOWING HOVER HIStory 

// Nav behavior with flags (Working)
const navItems = document.querySelectorAll('.nav li');
const contentDivs = document.querySelectorAll('.content');
const navBackground = document.getElementById('navBackground');
const header = document.getElementById('header');
let activeContent = null;
let hoverTimeout = null;
let hideTimeout = null;
const hoverDelay = 100; // Delay for hover effects
const hideDelay = 200; // Delay before hiding the background
let lastActiveNavItem = null; // Track the last active nav item

// Mapping content divs to their corresponding nav items
const contentToNavMap = {
  'showRoomContent': 'showRoom',
  'designContent': 'design',
  'aboutContent': 'about',
  'contactContent': 'contact'
};

// Hide and show content functions
function hideContent(content) {
  if (content) {
    content.style.opacity = '0';
    setTimeout(() => {
      if (content.style.opacity === '0') {
        content.style.display = 'none';
      }
    }, 500); // Match the CSS transition duration
  }
}

function showContent(content) {
  if (activeContent && activeContent !== content) {
    hideContent(activeContent);
  }
  content.style.display = 'flex';
  setTimeout(() => {
    content.style.opacity = '1';
    // Set the corresponding nav item's <a> color to red when content is flex
    updateNavItemColorBasedOnContent(content);
  }, 10); // Slight delay to apply display change before opacity transition
  activeContent = content;
}

// Set the corresponding nav item <a> color to red when its content is set to flex
function updateNavItemColorBasedOnContent(content) {
  // Remove 'active' class from all nav items
  navItems.forEach(li => li.querySelector('a').classList.remove('active'));

  // Get the ID of the content div and find the corresponding nav item
  const contentId = content.id;
  const correspondingNavId = contentToNavMap[contentId];
  const matchingNavItem = document.getElementById(correspondingNavId);

  if (matchingNavItem) {
    const matchingLink = matchingNavItem.querySelector('a'); // Get the <a> inside the li
    if (matchingLink) {
      matchingLink.classList.add('active'); // Add the 'active' class
    }
  }
}

function showNavBackground() {
  clearTimeout(hideTimeout);
  navBackground.style.display = 'flex';
  setTimeout(() => {
    navBackground.style.opacity = '1';
  }, 10); // Slight delay to ensure display change before opacity transition
}

function hideNavBackground() {
  navBackground.style.opacity = '0';
  hideTimeout = setTimeout(() => {
    if (navBackground.style.opacity === '0') {
      navBackground.style.display = 'none';
    }
    updateHeaderBackground(); // Update header background after hiding nav
  }, 500); // Match the CSS transition duration
}

// Reset all nav item <a> colors
function resetNavItemColors() {
  navItems.forEach(li => li.querySelector('a').classList.remove('active')); // Remove 'active' class
}

// Nav item interactions
navItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      const targetContent = document.getElementById(this.id + 'Content');
      if (activeContent !== targetContent) {
        showContent(targetContent); // Show the corresponding content
      }

      // Show nav background when hovering over any nav item
      showNavBackground();
    }, hoverDelay);
  });

  item.addEventListener('mouseout', function() {
    clearTimeout(hoverTimeout);
  });
});

contentDivs.forEach(div => {
  const wrapper = div.querySelector('.content-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', function() {
      clearTimeout(hideTimeout); // Prevent hiding while hovering
      showNavBackground(); // Keep the nav background visible when hovering the content wrapper
    });

    wrapper.addEventListener('mouseleave', function() {
      checkHideConditions();
    });
  }
});

// Check whether the mouse is not hovering the header or content wrapper
function checkHideConditions() {
  const isHoveringOverHeader = header.matches(':hover');
  const isHoveringOverContent = [...contentDivs].some(contentDiv =>
    contentDiv.querySelector('.content-wrapper').matches(':hover')
  );

  if (!isHoveringOverHeader && !isHoveringOverContent) {
    hideNavBackground();
    if (activeContent) {
      hideContent(activeContent);
      activeContent = null;
      resetNavItemColors(); // Reset nav item color when everything is hidden
    }
  }
}

// Add mouseleave event to the header to check hide conditions
header.addEventListener('mouseleave', function() {
  checkHideConditions();
});

// Initially hide all content
contentDivs.forEach(div => hideContent(div));

*/

//END NAV Functions END NAV FUNCTIONS
//NAV SHOWING HOVER HISTORY 
// Nav behavior with flags
const navItems = document.querySelectorAll('.nav li');
const contentDivs = document.querySelectorAll('.content');
const navBackground = document.getElementById('navBackground');
const header = document.getElementById('header');
let activeContent = null;
let hoverTimeout = null;
let hideTimeout = null;
const hoverDelay = 100; // Delay for hover effects
const hideDelay = 200; // Delay before hiding the background
let lastActiveNavItem = null; // Track the last active nav item

// Mapping content divs to their corresponding nav items
const contentToNavMap = {
  'showRoomContent': 'showRoom',
  'designContent': 'design',
  'aboutContent': 'about',
  'contactContent': 'contact'
};

// Hide and show content functions
function hideContent(content) {
  if (content) {
    content.style.opacity = '0';
    setTimeout(() => {
      if (content.style.opacity === '0') {
        content.style.display = 'none';
      }
    }, 500); // Match the CSS transition duration
  }
}

function showContent(content) {
  if (activeContent && activeContent !== content) {
    hideContent(activeContent);
  }
  content.style.display = 'flex';
  setTimeout(() => {
    content.style.opacity = '1';
    // Set the corresponding nav item's <a> color to red when content is flex
    updateNavItemColorBasedOnContent(content);
  }, 10); // Slight delay to apply display change before opacity transition
  activeContent = content;
}

// Set the corresponding nav item <a> color to red when its content is set to flex
function updateNavItemColorBasedOnContent(content) {
  // Remove 'active' class from all nav items
  navItems.forEach(li => li.querySelector('a').classList.remove('active'));

  // Get the ID of the content div and find the corresponding nav item
  const contentId = content.id;
  const correspondingNavId = contentToNavMap[contentId];
  const matchingNavItem = document.getElementById(correspondingNavId);

  if (matchingNavItem) {
    const matchingLink = matchingNavItem.querySelector('a'); // Get the <a> inside the li
    if (matchingLink) {
      matchingLink.classList.add('active'); // Add the 'active' class
    }
  }
}

function showNavBackground() {
  clearTimeout(hideTimeout);
  navBackground.style.display = 'flex';
  setTimeout(() => {
    navBackground.style.opacity = '1';
  }, 10); // Slight delay to ensure display change before opacity transition
}

function hideNavBackground() {
  navBackground.style.opacity = '0';
  hideTimeout = setTimeout(() => {
    if (navBackground.style.opacity === '0') {
      navBackground.style.display = 'none';
    }
    updateHeaderBackground(); // Update header background after hiding nav
  }, 500); // Match the CSS transition duration
}

// Reset all nav item <a> colors
function resetNavItemColors() {
  navItems.forEach(li => li.querySelector('a').classList.remove('active')); // Remove 'active' class
}

// Nav item interactions
navItems.forEach(item => {
  item.addEventListener('mouseover', function() {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
      const targetContent = document.getElementById(this.id + 'Content');
      if (activeContent !== targetContent) {
        showContent(targetContent); // Show the corresponding content
      }

      // Show nav background when hovering over any nav item
      showNavBackground();
    }, hoverDelay);
  });

  item.addEventListener('mouseout', function() {
    clearTimeout(hoverTimeout);
  });
});

contentDivs.forEach(div => {
  const wrapper = div.querySelector('.content-wrapper');
  if (wrapper) {
    wrapper.addEventListener('mouseenter', function() {
      clearTimeout(hideTimeout); // Prevent hiding while hovering
      showNavBackground(); // Keep the nav background visible when hovering the content wrapper
    });

    wrapper.addEventListener('mouseleave', function() {
      checkHideConditions();
    });
  }
});

// Check whether the mouse is not hovering the header or content wrapper
function checkHideConditions() {
  const isHoveringOverHeader = header.matches(':hover');
  const isHoveringOverContent = [...contentDivs].some(contentDiv =>
    contentDiv.querySelector('.content-wrapper').matches(':hover')
  );

  if (!isHoveringOverHeader && !isHoveringOverContent) {
    hideNavBackground();
    if (activeContent) {
      hideContent(activeContent);
      activeContent = null;
      resetNavItemColors(); // Reset nav item color when everything is hidden
    }
  }
}

// Add mouseleave event to the header to check hide conditions
header.addEventListener('mouseleave', function() {
  checkHideConditions();
});

// Initially hide all content
contentDivs.forEach(div => hideContent(div));





// *** Add touchstart functionality for mobile devices ***
// This function will act like 'mouseleave' for mobile touch devices
document.addEventListener('touchstart', function(event) {
  // Check if the touch is outside of 'header' or 'content-wrapper'
  const isTouchInsideHeader = header.contains(event.target);
  const isTouchInsideContent = [...contentDivs].some(contentDiv => 
    contentDiv.querySelector('.content-wrapper').contains(event.target)
  );

  // Run 'checkHideConditions' if the touch is outside these elements
  if (!isTouchInsideHeader && !isTouchInsideContent) {
    checkHideConditions();
  }
}, { passive: true }); // Use passive event listener to improve performance on mobile








//HEADER HIDE - HEADER HIDE - HEADER HIDE 
let lastScrollTop = 0; // Keep track of last scroll position
const nav = document.getElementById('nav');
const logoContainer = document.getElementById('logoContainer');

window.addEventListener('scroll', () => {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Scrolling down
    header.style.transform = 'translateY(-0%)'; // Hide header
    
    

  } else {
    // Scrolling up
    header.style.transform = 'translateY(0)'; // Show header
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling

});


//change logo color and nav colors on

/*
window.addEventListener('scroll', function() {
  var logo = document.querySelector('.logo');
  var navLinks = document.querySelectorAll('.nav li a'); // Select all <a> elements within .nav

  if (window.scrollY > 0) { // If the page is scrolled down
    logo?.classList.add('scrolled');
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)'; // Full opacity
    header.style.boxShadow = '2px 0px 1px rgba(0, 0, 0, 0.1)';
    navLinks.forEach(function(link) {
      link.classList.add('scrolled');
    });
  } else { // If the page is at the top
    logo?.classList.remove('scrolled');
    header.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Fully transparent
    header.style.boxShadow = '2px 0px 1px rgba(0, 0, 0, 0)';
    navLinks.forEach(function(link) {
      link.classList.remove('scrolled');
    });
  }
});

*/
// Track if the nav is being interacted with
let isNavInteracted = false;

// Function to update the header background based on scroll and nav interaction
function updateHeaderBackground() {
  var logo = document.querySelector('.logo');
  var navLinks = document.querySelectorAll('.nav li a');
  const navBackground = document.querySelector('.navigation_background');

  // If the navigation background is displayed as flex, make the header transparent
  if (navBackground.style.display === 'flex') {
    header.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Fully transparent
    header.style.boxShadow = 'none'; // No shadow
    logo?.classList.remove('scrolled');
    navLinks.forEach(function(link) {
      link.classList.remove('scrolled');
    });
  } else if (window.scrollY > 0) { // Otherwise, follow the scroll behavior
    logo?.classList.add('scrolled');
    header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)'; // Full opacity
    header.style.boxShadow = '2px 0px 1px rgba(0, 0, 0, 0.1)';
    navLinks.forEach(function(link) {
    link.classList.add('scrolled');
    });
  } else { // At the top of the page
    logo?.classList.remove('scrolled');
    header.style.backgroundColor = 'rgba(255, 255, 255, 0)'; // Fully transparent
    header.style.boxShadow = 'none';
    navLinks.forEach(function(link) {
      link.classList.remove('scrolled');
    });
  }
}

// Scroll event listener to update the header background
window.addEventListener('scroll', updateHeaderBackground);

// Example function for showing the nav background
function showNavBackground() {
  const navBackground = document.querySelector('.navigation_background');
  navBackground.style.display = 'flex';
  navBackground.style.opacity = '1';

  // Call updateHeaderBackground when nav is shown
  updateHeaderBackground();
}

// Example function for hiding the nav background
function hideNavBackground() {
  const navBackground = document.querySelector('.navigation_background');
  navBackground.style.opacity = '0';

  setTimeout(() => {
    navBackground.style.display = 'none';

    // Call updateHeaderBackground when nav is hidden
    updateHeaderBackground();
  }, 0); // Match CSS transition timing if needed
}





});
 


