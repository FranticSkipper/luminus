import { useAppSelector } from "@app/store/hooks/useAppSelector";
import { useSaveContentMutation } from "@entities/editor/api";
import { useState } from "react";

export default function useSaveEditorContent() {
  const [parentId, setParentId] = useState("");
  const [name, setName] = useState("");
  const [saveEditorContent] = useSaveContentMutation();
  const userId = useAppSelector((state) => state.authSlice.user?.id);
  const directories = useAppSelector((state) => state.fileSystemReducer.files);
  const editorContent = useAppSelector(
    (state) => state.editorSlice.editorContent
  );

  async function saveContent() {
    if (userId) {
      const res = await saveEditorContent({
        parentId: parentId === "" ? null : parentId,
        content: editorContent,
        userId: userId,
        name,
      });

      console.log(res);
    }
  }

  return {
    directories,
    saveContent,
    setParentId,
    setName,
    data: { parentId, name },
  };
}
