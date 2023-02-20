import styles from "../app/page.module.css";
import { robotoMono, roboto } from "@/app/fonts";

export default function Intro() {
  return (
    <header className={styles.introContainer}>
      <section className={styles.introText}>
        <h1 className={styles.smallHeader}>
          <span className={robotoMono.className}>Hello my name is</span>
          <span className={roboto.className + " " + styles.bigHeader}>
            Katie Holliday
          </span>
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
        <div className={styles.introBlob}>
          <div className={styles.introBlobMini}></div>
        </div>
      </section>
    </header>
  );
}
