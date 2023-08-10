import imageCarouselMaker from "../imageCarousel/imageCarouselMaker";

import luffy from "../pictures/luffy_statue.jpg";
import gundam from "../pictures/gundamn_statue.jpg";
import liberty from "../pictures/liberty_statue.jpg";

export default function pageLoad() {
  const content = document.querySelector("#content");

  const testArray = [luffy, gundam, liberty];

  content.appendChild(imageCarouselMaker(testArray));

  return content;
}
