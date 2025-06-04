import type { ButtonProps } from "@/components/tiptap-ui-primitive/button";
import styles from "./Button.module.scss";

export default function Button(props: ButtonProps) {
  return <button {...props} className={styles.button}></button>;
}
