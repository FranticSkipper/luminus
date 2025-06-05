export default function useSaveEditorContent() {
  function saveEditorContent(content: string) {
    //TODO: save editor content to database. Content is a JSON string;
    console.log(content);
  }

  return { saveEditorContent };
}
