import TiptapEditor from "@widgets/TiptapEditor/TiptapEditor";
import { WithDirectoriesTreeContainer } from "../../containers/WithDirectoriesTreeContainer";
import { DirectoriesTreeSidebar } from "@widgets/DirectoriesTreeSidebar";

export function WithDirectoriesTreeLayout() {
  return (
    <WithDirectoriesTreeContainer
      sidebar={<DirectoriesTreeSidebar />}
      content={<TiptapEditor />}
    />
  );
}
