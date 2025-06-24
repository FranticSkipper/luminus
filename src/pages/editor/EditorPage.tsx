import { WithDirectoriesTreeContainer } from "./ui/containers/WithDirectoriesTreeContainer";
import TiptapEditor from "@widgets/TiptapEditor/TiptapEditor";
import { EditorDetailsWidget } from "@widgets/EditorDetailsWidget/EditorDetailsWidget";
import { FileTreeWidget } from "@widgets/FileTreeWidget";

export const EditorPage = () => {
  return (
    <>
      <WithDirectoriesTreeContainer
        sidebar={<FileTreeWidget />}
        content={<TiptapEditor />}
        details={<EditorDetailsWidget />}
      />
    </>
  );
};
