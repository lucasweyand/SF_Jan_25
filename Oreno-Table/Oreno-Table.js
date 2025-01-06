document.addEventListener('DOMContentLoaded', () => {

  const images = [
    'Images/oreno_table_images/image1.jpg',
    'Images/oreno_table_images/image2.jpg',
    'Images/oreno_table_images/image3.jpg',
    'Images/oreno_table_images/image4.jpg',
  
  ];
  
  let currentIndex = 0;
  const imageContainer = document.querySelector('.pc_image-container');
  
  // Create image elements and add them to the container
  images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.className = index === 0 ? 'active' : ''; // Only the first image is active initially
      const wrapper = document.createElement('div');
      wrapper.className = 'pc_image-wrapper';
      wrapper.appendChild(img);
      imageContainer.appendChild(wrapper);
  });
  
  const imgElements = document.querySelectorAll('.pc_image-wrapper img');
  
  function showImage(index) {
      imgElements.forEach((img, i) => {
          img.classList.remove('active');
          if (i === index) {
              img.classList.add('active');
          }
      });
  }
  
  function prevImage() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      showImage(currentIndex);
  }
  
  function nextImage() {
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      showImage(currentIndex);
  }
  
  // Initialize the first image
  showImage(currentIndex);
  
  // Expose functions to global scope if needed for button onclick
  window.prevImage = prevImage;
  window.nextImage = nextImage;
  });