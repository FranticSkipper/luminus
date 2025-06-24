import { Link } from "react-router";
import styles from "./styles.module.scss";
import { useAppSelector } from "@app/store/hooks/useAppSelector";

export function First() {
  const user = useAppSelector((state) => state.authSlice.user);

  return (
    <section>
      <div className={styles.homePage}>
        <h1 className={styles.title}>Luminus</h1>
        <p className={styles.description}>
          <strong>Luminus</strong> is a modern, collaborative file and directory
          management platform with a built-in editor. Organize your projects,
          edit files, and collaborate with your team in real time—all in one
          place. Secure, fast, and beautifully designed for productivity.
        </p>

        <div className={styles.links}>
          {user ? (
            <Link to="/editor" className={styles.linkButton}>
              Editor
            </Link>
          ) : (
            <>
              {" "}
              <Link to="/registration" className={styles.linkButton}>
                Register
              </Link>
              <Link to="/login" className={styles.linkButton}>
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
