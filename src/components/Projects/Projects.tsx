"use client";
import styles from "./Projects.module.css";
import { robotoMono, roboto } from "@/app/fonts";
import Card from "../Card/Cards";
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
        <h2 className={roboto.className + " " + styles.bigHeader}>Projects</h2>
      </div>
      {/* <SWRConfig value={{ fallback }}> */}
      <Carousel data={data} />
      <Card data={data} />
      {/* </SWRConfig> */}
      <div className={styles.projectsBlobMini}>
        <div className={styles.profileImage}></div>
      </div>
    </section>
  );
}
