import styles from "../app/page.module.css";
import { robotoMono, roboto } from "@/app/fonts";

export default function Intro() {
  return (
    <header className={styles.intro}>
      <h1 className={styles.smallHeader}>
        <span className={robotoMono.className}>Hello my name is</span>
        <span className={roboto.className + " " + styles.bigHeader}>
          Katie Holliday
        </span>
      </h1>
      <p className={robotoMono.className + " " + styles.introDescription}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button className={styles.button1}>Projects</button>
      <button className={styles.button2}>LinkedIn</button>
    </header>
  );
}