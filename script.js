const images = [
    "image1.png",
    "image2.png",
    "image3.png",
    "image4.png",
  ];
  
  let currentImage = 0;
  
  const imageElement = document.querySelector(".image");
  const leftArrow = document.querySelector(".arrow-left");
  const rightArrow = document.querySelector(".arrow-right");
  
  function updateImage() {
    imageElement.src = images[currentImage];
  }
  
  leftArrow.addEventListener("click", () => {
    currentImage = (currentImage - 1 + images.length) % images.length;
    updateImage();
  });
  
  rightArrow.addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    updateImage();
  });

  leftArrow.addEventListener("touchstart", () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  updateImage();
});

rightArrow.addEventListener("touchstart", () => {
  currentImage = (currentImage + 1) % images.length;
  updateImage();
});
  
  updateImage();

  window.addEventListener('load', function() {
    document.body.classList.add('fade-in'); /* Add the "fade-in" class to the body element when the page is loaded */
  });
  
  