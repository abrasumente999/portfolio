import { StaticImageData } from "next/image";
import image1 from "../../public/image1.jpg";

export const images: StaticImageData[] = [image1, image1, image1, image1];

console.log(images[1]);
const imageByIndex = (index: number): string => {
  return images[index % images.length].src;
};

console.log(imageByIndex(1));
export default imageByIndex;
