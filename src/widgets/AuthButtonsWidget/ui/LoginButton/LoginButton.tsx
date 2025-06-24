import { NavLink } from "react-router";
import styles from "./styles.module.scss";

export function LoginButton() {
  return (
    <NavLink
      to="/login"
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ""}`
      }
    >
      Sign In
    </NavLink>
  );
}
