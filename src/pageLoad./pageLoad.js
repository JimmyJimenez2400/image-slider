import imageCarouselMaker from "../imageCarousel/imageCarouselMaker";

export default function pageLoad() {
  const content = document.querySelector("#content");

  const testArray = ["luffy", "gundam", "liberty"];

  content.appendChild(imageCarouselMaker(testArray));

  return content;
}
