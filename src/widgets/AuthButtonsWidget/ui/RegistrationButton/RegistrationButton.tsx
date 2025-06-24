import { NavLink } from "react-router";
import styles from "./styles.module.scss";

export function RegistrationButton() {
  return (
    <NavLink
      to="/registration"
      className={({ isActive }) =>
        `${styles.link} ${isActive ? styles.active : ""}`
      }
    >
      Sign Up
    </NavLink>
  );
}
