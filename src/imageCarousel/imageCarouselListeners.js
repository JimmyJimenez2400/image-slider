let currentSlide = 0;

function nextSlide() {
  const grabAllImages = document.getElementsByClassName("carouselImage");

  currentSlide += 1;

  const lastSlide = grabAllImages.length - 1;

  if (currentSlide > lastSlide) {
    currentSlide = 0;
  }

  for (let i = 0; i < grabAllImages.length; i += 1) {
    grabAllImages[i].classList.remove("active");
  }

  grabAllImages[currentSlide].classList.add("active");
}

function previousSlide() {
  const grabAllImages = document.getElementsByClassName("carouselImage");

  currentSlide -= 1;

  const lastSlide = grabAllImages.length - 1;
  if (currentSlide < 0) currentSlide = lastSlide;

  for (let i = 0; i < grabAllImages.length; i += 1) {
    grabAllImages[i].classList.remove("active");
  }
  grabAllImages[currentSlide].classList.add("active");
}

export { nextSlide, previousSlide };

/* 
Main Problem: How can we make the carousel work??

3 Options:
1. We could give each button their own event listener and function
2. We could give each button the same event listener
3. I don't know
*/
