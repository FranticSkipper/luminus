import { WithDirectoriesTreeContainer } from "./ui/containers/WithDirectoriesTreeContainer";
import { EditorWidget } from "@widgets/EditorWidget";
import { EditorDetailsWidget } from "@widgets/EditorDetailsWidget/EditorDetailsWidget";
import { FileTreeWidget } from "@widgets/FileTreeWidget";

export const EditorPage = () => {
  return (
    <>
      <WithDirectoriesTreeContainer
        sidebar={<FileTreeWidget />}
        content={<EditorWidget />}
        details={<EditorDetailsWidget />}
      />
    </>
  );
};
