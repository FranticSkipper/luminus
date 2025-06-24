import TiptapEditor from "@widgets/TiptapEditor/TiptapEditor";
import { WithDirectoriesTreeContainer } from "../../containers/WithDirectoriesTreeContainer";
import { DirectoriesTreeSidebar } from "@widgets/FileTreeWidget";
import { EditorDetailsWidget } from "@widgets/EditorDetailsWidget/EditorDetailsWidget";

export function WithDirectoriesTreeLayout() {
  return (
    <WithDirectoriesTreeContainer
      sidebar={<DirectoriesTreeSidebar />}
      content={<TiptapEditor />}
      details={<EditorDetailsWidget />}
    />
  );
}
