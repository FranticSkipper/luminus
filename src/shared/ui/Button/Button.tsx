import type { ButtonProps } from "@widgets/EditorWidget/ui/tiptap-ui-primitive/button";
import styles from "./Button.module.scss";

export default function Button(props: ButtonProps) {
  return <button {...props} className={styles.button}></button>;
}
