import styles from "./styles.module.scss";

interface Props {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

export function WithDirectoriesTreeContainer({ sidebar, content }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.aside}>{sidebar}</div>
      <div className={styles.main}>{content}</div>
    </div>
  );
}
