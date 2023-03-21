"use client";
import styles from "./Projects.module.css";
import Cards from "../Cards/Cards";
import useSWR, { SWRConfig } from "swr";
import Carousel from "../Carousel/Carousel";
import { ProjectType } from "data";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Projects() {
  const { data, error, isLoading } = useSWR<ProjectType[]>(
    "/api/projects",
    fetcher
  );
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <section className={styles.projectsContainer} id="projects">
      <div className={styles.projectsText}>
        <h2 className={styles.bigHeader}>Projects</h2>
      </div>

      <Carousel data={data} />
      <Cards data={data} />
      <div className={styles.projectsBlobMini}>
        <div className={styles.profileImage}></div>
      </div>
    </section>
  );
}
