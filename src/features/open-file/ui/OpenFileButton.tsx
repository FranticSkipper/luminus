import { useOpenFile } from "../model/useOpenFile";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
  isActive?: boolean;
}

export function OpenFileButton({ children, isActive = false }: Props) {
  const { openFile } = useOpenFile();

  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ""}`}
      onClick={openFile}
    >
      {children}
    </button>
  );
}
