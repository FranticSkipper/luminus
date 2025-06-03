import useSaveEditorContent from "../model/useSaveEditorContent";

export default function SaveEditorContentButton({ editorContent }) {
  const { saveEditorContent } = useSaveEditorContent();

  function handleSaveEditorContent() {
    saveEditorContent(editorContent);
  }

  return <button onClick={handleSaveEditorContent}>Save</button>;
}
