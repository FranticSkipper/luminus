import { useAuthLogup } from "../model/useAuthLogup";
import styles from "./AuthLogupForm.module.scss";
import { Link } from "react-router-dom";

export function AuthLogupForm() {
  const { onRegistration, setEmail, setPassword, data } = useAuthLogup();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    onRegistration();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Sign Up</h2>

      <div className={styles.field}>
        <label className={styles.label}>
          <span>Email</span>
          <input
            type="email"
            className={styles.input}
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <span>Password</span>
          <input
            type="password"
            className={styles.input}
            name="password"
            placeholder="Enter your password"
            value={data.password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <span>Repeat password</span>
          <input
            type="password"
            className={styles.input}
            placeholder="Repeat your password"
          />
        </label>
      </div>

      <button type="submit" className={styles.button}>
        Sign Up
      </button>

      <p className={styles.link}>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </form>
  );
}
