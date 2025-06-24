import { Link } from "react-router";
import styles from "./styles.module.scss";

export function Logo() {
  return (
    <div className={styles.logoWrapper}>
      <span className={styles.logoIcon}>L</span>
      <Link to="/" className={styles.logoText}>
        Luminus
      </Link>
    </div>
  );
}
