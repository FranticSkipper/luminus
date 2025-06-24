import { LoginButton } from "./ui/LoginButton/LoginButton";
import { RegistrationButton } from "./ui/RegistrationButton/RegistrationButton";
import styles from "./styles.module.scss";

export function AuthButtonsWidget() {
  return (
    <div className={styles.wrapper}>
      <RegistrationButton />
      <LoginButton />
    </div>
  );
}
