/* eslint-disable quotes */
import { first } from "lodash";
import "../fontawesome/fontawesome";
import "../fontawesome/solid";

import { nextSlide, previousSlide } from "./imageCarouselListeners";

export default function imageCarouselMaker(images) {
  const imageCarouselContainer = document.createElement("div");
  imageCarouselContainer.id = "imageCarouselContainer";

  imageCarouselContainer.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; position: relative; height: 80%; width: 80%;"
  );

  const pictureFrame = document.createElement("div");
  pictureFrame.classList.add("pictureFrame");
  pictureFrame.setAttribute(
    "style",
    "height: 100%; width: 100%; display: flex; flex-direction: row; align-items: center;"
  );

  for (let i = 0; i < images.length; i += 1) {
    if (i === 0) {
      const newImage = new Image();
      newImage.setAttribute("class", "carouselImage active");
      newImage.src = images[i];
      newImage.setAttribute(
        "style",
        "height: 100%; width: 100%; object-fit: cover;  display: none;"
      );

      pictureFrame.appendChild(newImage);
      continue;
    }
    const newImage = new Image();
    newImage.setAttribute("class", "carouselImage");
    newImage.src = images[i];
    newImage.setAttribute(
      "style",
      "height: 100%; width: 100%; object-fit: cover;  display: none;"
    );

    pictureFrame.appendChild(newImage);
  }

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

  const circlesContainer = document.createElement("section");
  circlesContainer.classList.add("circlesContainer");

  for (let i = 0; i < 3; i += 1) {
    const circleSpan = document.createElement("span");
    circleSpan.classList.add("circleSpan");
    circleSpan.setAttribute(
      "style",
      "cursor: pointer; height: 15px; width: 15px; margin: 0 2px; background-color: white; border-radius: 50%; display: inline-block; transition: background-color 0.6s ease;"
    );

    circlesContainer.appendChild(circleSpan);
  }

  imageCarouselContainer.appendChild(pictureFrame);
  imageCarouselContainer.appendChild(arrowContainer);
  imageCarouselContainer.appendChild(circlesContainer);

  return imageCarouselContainer;
}
