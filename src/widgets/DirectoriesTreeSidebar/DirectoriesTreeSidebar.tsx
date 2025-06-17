import { CreateNewTreeDirectoryButton } from "@features/create-new-tree-directory/ui";
import { TreeDirectoryList } from "./ui/TreeDirectoryList";
import { useGetAllFilesQuery } from "@entities/file-system/api/fileSystemApi";
import { useMemo } from "react";

import { prepareDirectoriesList } from "./lib/prepareDirectoriesList";

export function DirectoriesTreeSidebar() {
  const { data = [], error, isLoading } = useGetAllFilesQuery();

  const directoriesTreeArray = useMemo(
    () => prepareDirectoriesList(data),
    [data]
  );

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <aside>
      <h2>Directories</h2>
      <TreeDirectoryList itemList={directoriesTreeArray} />
      <CreateNewTreeDirectoryButton />
    </aside>
  );
}
