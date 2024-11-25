// Wait for the DOM to load before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Function to initialize a slider
  function initializeSlider(slider) {
    let currentIndex = 0; // Track the current image for this slider
    const images = slider.querySelectorAll(".slider-image");
    const imageContainer = slider.querySelector(".image-container");
    const totalImages = images.length;

    // Function to update the slider position
    function updateSlider() {
      const offset = -currentIndex * 100; // Calculate the offset
      imageContainer.style.transform = `translateX(${offset}%)`;
    }

    // Move to the next image
    function nextImage() {
      currentIndex = (currentIndex + 1) % totalImages; // Loop to the first image
      updateSlider();
    }

    // Move to the previous image
    function prevImage() {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop to the last image
      updateSlider();
    }

    // Attach event listeners to buttons
    const leftButton = slider.querySelector(".left-btn");
    const rightButton = slider.querySelector(".right-btn");

    if (leftButton && rightButton) {
      leftButton.addEventListener("click", prevImage);
      rightButton.addEventListener("click", nextImage);
    } else {
      console.error("Slider buttons not found in:", slider);
    }
  }

  // Select all sliders and initialize them
  const sliders = document.querySelectorAll(".image-slider");
  if (sliders.length > 0) {
    sliders.forEach(initializeSlider);
  } else {
    console.error("No sliders found on the page.");
  }
});
