import Button from "@shared/ui/Button/Button";
import useSaveEditorContent from "../model/useSaveEditorContent";

export function SaveEditorContentButton({ content }: { content: string }) {
  const { saveEditorContent } = useSaveEditorContent();

  function handleSaveEditorContent() {
    saveEditorContent(content);
  }

  return <Button onClick={handleSaveEditorContent}>Save content</Button>;
}
