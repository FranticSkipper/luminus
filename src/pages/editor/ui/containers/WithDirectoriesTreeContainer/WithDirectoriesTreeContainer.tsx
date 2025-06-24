import styles from "./styles.module.scss";

interface Props {
  sidebar: React.ReactNode;
  content: React.ReactNode;
  details: React.ReactNode;
}

export function WithDirectoriesTreeContainer({
  sidebar,
  content,
  details,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.aside}>{sidebar}</div>
      <div className={styles.main}>{content}</div>
      <div className={styles.details}>{details}</div>
    </div>
  );
}
