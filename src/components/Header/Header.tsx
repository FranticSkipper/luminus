import Authorization from "@widgets/Auth/Auth";
import { NavigationBar } from "@widgets/NavigationBar/index";
import styles from "./styles.module.scss";
import { Logo } from "@shared/ui/components/Logo/Logo";
import { SearchBar } from "@widgets/SearchBar";

export function Header() {
  return (
    <header>
      <div className={styles.header_container}>
        <div className={styles.wrapper}>
          <Logo />

          <div>
            <div>
              <NavigationBar />
            </div>
            <div>
              <SearchBar />
            </div>
          </div>

          <Authorization />
        </div>
      </div>
    </header>
  );
}
