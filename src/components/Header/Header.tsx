import Logo from "../../shared/components/Logo/Logo";
import Authorization from "../../widgets/Authorization/Authorization";
import NavigationBar from "../../widgets/NavigationBar/NavigationBar";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo url="" alt="" />
      <NavigationBar />
      <Authorization />
    </header>
  );
}
