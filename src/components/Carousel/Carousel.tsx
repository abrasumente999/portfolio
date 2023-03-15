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

export function Carousel({ data }: { data: ProjectType[] }) {
  const OPTIONS: EmblaOptionsType = { align: "center" };
  const [emblaRef] = useEmblaCarousel(OPTIONS);
  const [isTapped, setIsTapped] = useState<ProjectType>();

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
          <p
            className={
              robotoMono.className +
              " " +
              styles.projectSeeMore +
              " " +
              styles[`p${project.id}`]
            }
          >
            Read More
          </p>
        </Link>
      );
    } else {
      return;
    }
  };

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {data.map((project) => (
            <article
              className={styles.embla__slide}
              key={project.id}
              onClick={() => setIsTapped(project)}
            >
              {project === isTapped ? renderElement(project) : null}
              <Image
                className={styles.embla__slide__img}
                src={imageByIndex(+project.id - 1)}
                alt={`Screenshot of ${project.name} project`}
                width={300}
                height={300}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
