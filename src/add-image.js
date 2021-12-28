import image from "./image.jpg";
import altImage from "./altText.txt";
function addImage() {
  const img = document.createElement("img");
  img.alt = altImage;
  img.width = 300;
  img.src = image;
  const body = document.querySelector("body");
  body.appendChild(img);
}
export default addImage;
