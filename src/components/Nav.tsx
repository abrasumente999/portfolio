import styles from "../app/page.module.css";

export default function Nav() {
  return (
    <nav className={styles.NavContainer}>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
    </nav>
  );
}
