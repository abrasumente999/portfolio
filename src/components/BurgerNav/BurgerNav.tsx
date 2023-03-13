"use client";
import styles from "./BurgerNav.module.css";
import React, { useState } from "react";

export default function BurgerNav({
  hamburgerOpen,
}: {
  hamburgerOpen: boolean;
}) {
  return (
    <>
      <div className={styles.hamburger}>
        <div
          className={`${styles.burger} ${
            hamburgerOpen ? styles.burger1Active : styles.burger1
          }`}
        />
        <div
          className={`${styles.burger2} ${
            hamburgerOpen ? styles.burger2Active : styles.burger2
          }`}
        />
        <div
          className={`${styles.burger} ${
            hamburgerOpen ? styles.burger3Active : styles.burger3
          }`}
        />
      </div>
    </>
  );
}
