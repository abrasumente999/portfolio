import { StaticImageData } from "next/image";
import cover1 from "../../public/cover1.jpg";
import cover2 from "../../public/cover2.jpg";
import cover3 from "../../public/cover3.jpg";

export const images: StaticImageData[] = [cover1, cover2, cover3];
console.log(images);
const imageByIndex = (index: number): string => {
  return images[index % images.length].src;
};

export default imageByIndex;
