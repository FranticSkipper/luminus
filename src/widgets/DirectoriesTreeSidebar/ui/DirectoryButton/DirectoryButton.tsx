import styles from "./styles.module.scss";

export function DirectoryButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return <button {...props} className={styles.button} />;
}
