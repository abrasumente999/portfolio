"use client";
import { useState } from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
import BurgerNav from "../BurgerNav/BurgerNav";

export default function Nav() {
  const [hamburgerOpen, setHamburgerOpen] = useState<boolean>(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navHeader}>
        <span className={styles.roboto}>Katie</span>
        <span className={styles.roboto + " " + styles.navHeaderBold}>
          Holliday
        </span>
      </div>
      <div className={styles.burgerContainer}>
        <ul
          className={`${styles.navLinks} ${
            hamburgerOpen ? styles.navLinksOpen : null
          }`}
        >
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.hamburger} onClick={toggleHamburger}>
        <BurgerNav hamburgerOpen={hamburgerOpen} />
      </div>
    </nav>
  );
}
