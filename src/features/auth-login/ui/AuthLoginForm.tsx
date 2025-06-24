import useAuthLogin from "../model/useAuthLogin";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export function AuthLoginForm() {
  const { login, setEmail, setPassword, values } = useAuthLogin();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    login();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Sign In</h2>

      <div className={styles.field}>
        <label className={styles.label}>
          <span>Email</span>
          <input
            className={styles.input}
            type="text"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={values.email}
          />
        </label>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <span>Password</span>
          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={values.password}
          />
        </label>
      </div>

      <button type="submit" className={styles.button}>
        Sign In
      </button>

      <p className={styles.link}>
        Don't have an account? <Link to="/registration">Sign Up</Link>
      </p>
    </form>
  );
}
