import styles from "./Projects.module.css";
import { robotoMono, roboto } from "@/app/fonts";
import { useEffect } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

export default function Projects() {
  return (
    <section className={styles.projectsContainer} id="projects">
      <div className={styles.projectsText}>
        <h2 className={roboto.className + " " + styles.bigHeader}>Projects</h2>
      </div>
      <Carousel />
      <Card />
      <div className={styles.projectsBlobMini}>
        <div className={styles.profileImage}></div>
      </div>
    </section>
  );
}
