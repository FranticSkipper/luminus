import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

export function BaseContainer({ children }: Props) {
  return <div className={styles.container}>{children}</div>;
}
