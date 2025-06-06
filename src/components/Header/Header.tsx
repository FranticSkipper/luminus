import Logo from "@shared/components/Logo/Logo";
import Authorization from "@widgets/Auth/Auth";
import { NavigationBar } from "@widgets/NavigationBar/index";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header>
      <div className={styles.header_container}>
        <div className={styles.wrapper}>
          <Logo />
          <NavigationBar />
          <Authorization />
        </div>
      </div>
    </header>
  );
}
