"use client";
import useSWR from "swr";
import styles from "./Carousel.module.css";
import { robotoMono, roboto } from "@/app/fonts";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import imageByIndex from "@/utils/utils";
import { ProjectType } from "data";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function Carousel() {
  const { data, error, isLoading } = useSWR<ProjectType[]>(
    "/api/projects",
    fetcher
  );
  const OPTIONS: EmblaOptionsType = { align: "center" };
  const [emblaRef] = useEmblaCarousel(OPTIONS);
  const [isTapped, setIsTapped] = useState<ProjectType>();

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  const renderElement = (project: ProjectType) => {
    if (isTapped) {
      return (
        <Link
          href={`/projects/${project.id}`}
          className={styles.embla__isTapped}
        >
          <h3 className={roboto.className + " " + styles.projectHeader}>
            {project.name}
          </h3>
          <p className={robotoMono.className + " " + styles.projectDesc}>
            {project.description}
          </p>
          See More
        </Link>
      );
    } else {
      return;
    }
  };

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {data.map((project) => (
            <div
              className={styles.embla__slide}
              key={project.id}
              onClick={() => setIsTapped(project)}
            >
              {project === isTapped ? renderElement(project) : null}
              <Image
                className={styles.embla__slide__img}
                src={imageByIndex(project.id - 1)}
                alt="Your alt text"
                width={300}
                height={300}
              />
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
