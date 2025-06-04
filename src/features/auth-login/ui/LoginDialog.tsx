import Button from "@shared/ui/Button/Button";
import useAuthLogin from "../model/useAuthLogin";
import styles from "./LoginDialog.module.css";

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginDialog = ({ isOpen, onClose }: LoginDialogProps) => {
  const { userLogin, setEmail, setPassword, values } = useAuthLogin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    userLogin();
  };

  const handleDialogClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog className={styles.dialog} onClick={handleDialogClick} open={isOpen}>
      <div className={styles.wrapper}>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label className={styles.label}>
              <span>Email:</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                value={values.email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>
              <span>Password</span>
              <input
                className={styles.input}
                type="password"
                name="password"
                value={values.password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </label>
          </div>

          <div className={styles.buttons}>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Login</Button>
          </div>
        </form>
      </div>
    </dialog>
  );
};
