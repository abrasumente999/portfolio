import styles from "../app/page.module.css";
import Link from "next/link";
import About from "./About";

export default function Nav() {
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navHeader}>
        <span className={styles.roboto}>Katie</span>
        <span className={styles.roboto + " " + styles.navHeaderBold}>
          Holliday
        </span>
      </div>
      <div className={styles.navLinks}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="#about" className={styles.navLink}>
          About
        </Link>
        <Link href="#contact" className={styles.navLink}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
