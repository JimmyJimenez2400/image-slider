/* eslint-disable quotes */
import "../fontawesome/fontawesome";
import "../fontawesome/solid";

import { nextSlide, previousSlide } from "./imageCarouselListeners";

export default function imageCarouselMaker(images) {
  const imageCarouselContainer = document.createElement("div");
  imageCarouselContainer.id = "imageCarouselContainer";

  const pictureFrame = document.createElement("div");
  pictureFrame.classList.add("pictureFrame");

  for (let i = 0; i < images.length; i += 1) {
    const newImage = new Image();
    newImage.classList.add("carouselImage");
    newImage.src = images[i];

    pictureFrame.appendChild(newImage);
  }

  pictureFrame.firstChild.classList.add("active");

  // We need to create the arrows
  const arrowContainer = document.createElement("section");
  arrowContainer.classList.add("arrowContainer");

  const buttonLeft = document.createElement("button");
  buttonLeft.id = "previousButton";
  buttonLeft.addEventListener("click", previousSlide);

  buttonLeft.innerHTML = '<i class="fa-solid fa-arrow-left fa-2xl"></i>';

  const buttonRight = document.createElement("button");
  buttonRight.id = "nextButton";
  buttonRight.addEventListener("click", nextSlide);
  buttonRight.innerHTML = '<i class="fa-solid fa-arrow-right fa-2xl"></i>';

  arrowContainer.appendChild(buttonLeft);
  arrowContainer.appendChild(buttonRight);

  imageCarouselContainer.appendChild(pictureFrame);
  imageCarouselContainer.appendChild(arrowContainer);

  return imageCarouselContainer;
}
