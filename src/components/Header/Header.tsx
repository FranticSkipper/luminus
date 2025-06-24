import { Logo } from "@shared/ui/components/Logo/Logo";

import styles from "./styles.module.scss";
import { AuthBlockWidget } from "@widgets/AuthBlockWidget";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <div className={styles.wrapper}>
          <Logo />

          <AuthBlockWidget />
        </div>
      </div>
    </header>
  );
}
