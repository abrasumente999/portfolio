import styles from "./About.module.css";
import { robotoMono } from "@/app/fonts";

export default function About() {
  return (
    <section className={styles.aboutContainer} id="about">
      <div className={styles.aboutText}>
        <h2 className={styles.bigHeader}>About Me</h2>
        <p className={robotoMono.className + " " + styles.aboutDescription}>
          I&apos;m a junior front end developer. Welcome to my portfolio.
          <br />
          hfbsdjhfbdjhfbdshjm fdsfsdhfbsdhfbsdfhjbds I&apos;m a junior front end
          developer.
          <br /> Welcome to my portfolio. hfbsdjhfbdjhfbdshjm
          <br />
          fdsfsdhfbsdhfbsdfhjbds I&apos;m a junior front end developer.
        </p>
      </div>
      <div className={styles.aboutBlobMini}>
        <div className={styles.profileImage}></div>
      </div>

      <div className={styles.profileImage}></div>
      <div className={styles.aboutBlob}></div>
    </section>
  );
}
