import styles from "./Cards.module.css";
import { ProjectType } from "data";

export default function Cards({ data }: { data: ProjectType[] }) {
  return <section className={styles.cardContainer}></section>;
}
