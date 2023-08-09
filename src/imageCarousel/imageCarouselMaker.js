import "../fontawesome/fontawesome";
import "../fontawesome/solid";

import luffy from "../pictures/luffy_statue.jpg";
import gundam from "../pictures/gundamn_statue.jpg";
import liberty from "../pictures/liberty_statue.jpg";

import { nextSlide, previousSlide } from "./imageCarouselListeners";

export default function imageCarouselMaker(images) {
  console.log(images);
  const imageCarouselContainer = document.createElement("div");
  imageCarouselContainer.id = "imageCarouselContainer";

  const pictureFrame = document.createElement("div");
  pictureFrame.classList.add("pictureFrame");

  // We need to create dynamic slides, right now just hard code it
  const luffyPicture = new Image();
  luffyPicture.classList.add("carouselImage");
  luffyPicture.classList.add("active");
  luffyPicture.src = luffy;

  const gundamPicture = new Image();
  gundamPicture.classList.add("carouselImage");
  gundamPicture.src = gundam;

  const libertyPicture = new Image();
  libertyPicture.classList.add("carouselImage");
  libertyPicture.src = liberty;

  pictureFrame.appendChild(luffyPicture);
  pictureFrame.appendChild(gundamPicture);
  pictureFrame.appendChild(libertyPicture);

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
