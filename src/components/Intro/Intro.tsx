import styles from "./Intro.module.css";
import { robotoMono } from "@/app/fonts";

export default function Intro() {
  return (
    <header className={styles.introContainer} id="intro">
      <section className={styles.introText}>
        <h1>
          <span className={robotoMono.className + " " + styles.smallHeader}>
            Hello my name is
          </span>
          <span className={styles.bigHeader}>Katie</span>
          <span className={styles.bigHeader}>Holliday</span>
        </h1>
        <p className={robotoMono.className + " " + styles.introDescription}>
          I&apos;m a junior front end developer. Welcome to my portfolio.
        </p>

        <div className={styles.buttonsContainer}>
          <button className={styles.button1}>Projects</button>
          <button className={styles.button2}>LinkedIn</button>
        </div>
      </section>
      <section className={styles.introImageContainer}>
        <div className={styles.introBlob}></div>
      </section>
      <div className={styles.introBlobMini}></div>
    </header>
  );
}
