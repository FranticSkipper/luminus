import Button from "@shared/ui/Button/Button";
import useSaveEditorContent from "../model/useSaveEditorContent";
import styles from "./styles.module.scss";

export function SaveEditorContentLocationButton() {
  const { directories, saveContent, setParentId, data } =
    useSaveEditorContent();

  function handleSaveEditorContent() {
    saveContent();
  }

  return (
    <div className={styles.container}>
      <select
        className={styles.select}
        name="location"
        onChange={(e) => setParentId(e.target.value)}
        defaultValue={data.parentId}
      >
        <option value="">Empty</option>
        {directories.map((directory) => (
          <option key={directory.id} value={directory.parentId || ""}>
            {directory.name}
          </option>
        ))}
      </select>
      <Button onClick={handleSaveEditorContent} className={styles.button}>
        Save content
      </Button>
    </div>
  );
}
