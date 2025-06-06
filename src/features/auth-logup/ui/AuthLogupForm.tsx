import styles from "./AuthLogupForm.module.scss";

export function AuthLogupForm() {
  return (
    <form className={styles.form}>
      <h2 className={styles.title}>Sign Up</h2>

      <div className={styles.field}>
        <label className={styles.label}>
          <span>Login</span>
          <input type="text" className={styles.input} />
        </label>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <span>Email</span>
          <input type="email" className={styles.input} />
        </label>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <span>Password</span>
          <input type="password" className={styles.input} />
        </label>
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <span>Repeat password</span>
          <input type="password" className={styles.input} />
        </label>
      </div>

      <button type="submit" className={styles.button}>
        Sign Up
      </button>

      <p className={styles.link}>
        Already have an account? <a href="/login">Sign In</a>
      </p>
    </form>
  );
}
