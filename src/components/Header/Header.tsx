import Logo from "@shared/components/Logo/Logo";
import Authorization from "@widgets/Auth/Auth";
import NavigationBar from "@widgets/NavigationBar/NavigationBar";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header>
      <div className={styles.header_container}>
        <div className={styles.wrapper}>
          <Logo url="" alt="" />
          <NavigationBar />
          <Authorization />
        </div>
      </div>
    </header>
  );
}
