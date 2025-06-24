import { useAppSelector } from "@app/store/hooks/useAppSelector";
import { NavLink } from "react-router";
import userIcon from "@shared/assets/images/icons/person.svg";
import styles from "./styles.module.scss";
import { useState } from "react";

export function UserMenu() {
  const userID = useAppSelector((state) => state.authSlice.user?.id);
  const [isDisplay, setIsDisplay] = useState(false);

  function toggleMenu() {
    setIsDisplay(!isDisplay);
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.image} onClick={toggleMenu}>
        <img src={userIcon} alt="User icon" />
      </div>

      {isDisplay ? (
        <div className={styles.menu}>
          <ul className={styles.list}>
            <li>
              <NavLink to={`/user/${userID}`}>Profile</NavLink>
            </li>

            <li>
              <NavLink to={`/editor`}>Editor</NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
