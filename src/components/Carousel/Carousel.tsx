"use client";
import useSWR from "swr";
import styles from "./Carousel.module.css";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import imageByIndex from "@/utils/utils";
import { ProjectType } from "data";
import Link from "next/link";
import Image from "next/image";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Carousel(props: PropType) {
  const { data, error, isLoading } = useSWR<ProjectType[]>(
    "/api/projects",
    fetcher
  );

  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  console.log(data);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((index) => (
            <Link
              href={`/projects/${index}`}
              className={styles.embla__slide}
              key={index}
            >
              <Image
                className={styles.embla__slide__img}
                src={imageByIndex(index)}
                alt="Your alt text"
                width={300}
                height={300}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
