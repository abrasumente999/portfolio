import styles from "./About.module.css";
import { robotoMono, roboto } from "@/app/fonts";

export default function About() {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.aboutTextContainer}>
        <div className={styles.aboutText}>
          <h2 className={roboto.className + " " + styles.bigHeader}>
            About Me
          </h2>
          <p className={robotoMono.className + " " + styles.aboutDescription}>
            I&apos;m a junior front end developer. Welcome to my portfolio.
            <br />
            hfbsdjhfbdjhfbdshjm fdsfsdhfbsdhfbsdfhjbds I&apos;m a junior front
            end developer.
            <br /> Welcome to my portfolio. hfbsdjhfbdjhfbdshjm
            <br />
            fdsfsdhfbsdhfbsdfhjbds I&apos;m a junior front end developer.
            <br />
            <br />
            Welcome to my portfolio. hfbsdjhfbdjhfbdshjm fdsfsdhfbsdhfbsdfhjbds
          </p>
        </div>
        <div className={styles.aboutBlobMini}>
          <div className={styles.profileImage}></div>
        </div>
      </div>
      <section className={styles.aboutImageContainer}>
        <div className={styles.profileImage}></div>
      </section>
      <div className={styles.aboutBlob}></div>
    </section>
  );
}
