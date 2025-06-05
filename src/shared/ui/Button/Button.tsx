import type { ButtonProps } from "@entities/tiptapEditor/components/tiptap-ui-primitive/button";
import styles from "./Button.module.scss";

export default function Button(props: ButtonProps) {
  return <button {...props} className={styles.button}></button>;
}
