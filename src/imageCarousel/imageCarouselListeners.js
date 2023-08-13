let currentSlide = 0;

function showCurrentActiveSlide() {
  const grabAllCircles = document.getElementsByClassName("circleSpan");

  for (let i = 0; i < grabAllCircles.length; i += 1) {
    grabAllCircles[i].classList.remove("activeCircle");
  }

  grabAllCircles[currentSlide].classList.add("activeCircle");
}

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
  showCurrentActiveSlide();
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
  showCurrentActiveSlide();
}

function takeToImage(e) {
  currentSlide = Number(e.target.id);

  const grabAllImages = document.getElementsByClassName("carouselImage");

  const grabAllCircles = document.getElementsByClassName("circleSpan");

  for (let i = 0; i < grabAllImages.length; i += 1) {
    grabAllImages[i].classList.remove("active");
  }
  grabAllImages[currentSlide].classList.add("active");

  for (let i = 0; i < grabAllCircles.length; i += 1) {
    grabAllCircles[i].classList.remove("activeCircle");
  }
  grabAllCircles[currentSlide].classList.add("activeCircle");
}

setInterval(nextSlide, 5000);

// We need to tell which slide is active depending on the circleSpans

export { nextSlide, previousSlide, takeToImage };
