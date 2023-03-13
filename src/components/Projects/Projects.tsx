import styles from "./Projects.module.css";
import { robotoMono, roboto } from "@/app/fonts";
import { useEffect } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel-react";

const OPTIONS: EmblaOptionsType = { align: "center" };
const SLIDE_COUNT = 3;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Projects() {
  return (
    <section className={styles.projectsContainer} id="projects">
      <div className={styles.projectsText}>
        <h2 className={roboto.className + " " + styles.bigHeader}>Projects</h2>
      </div>
      <Carousel slides={SLIDES} options={OPTIONS} />
      <Card />
      <div className={styles.projectsBlobMini}>
        <div className={styles.profileImage}></div>
      </div>
    </section>
  );
}
