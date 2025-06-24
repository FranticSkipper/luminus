// import { CreateNewTreeDirectoryButton } from "@features/create-new-tree-directory/ui";
import { ItemsList } from "./ui/itemsList";
import { useGetAllFilesQuery } from "@entities/file-tree/api/fileTreeApi";
import { useEffect, useMemo } from "react";

import { prepareDirectoriesList } from "./lib/prepareDirectoriesList";
import { useAppSelector } from "@app/store/hooks/useAppSelector";
import { useAppDispatch } from "@app/store/hooks/useAppDispatch";
import { setFile } from "@entities/file-tree/slice";
import styles from "./styles.module.scss";
import { useCreateNewTreeDirectory } from "@features/create-new-tree-directory/model/useCreateNewTreeDirectory";

export function FileTreeWidget() {
  const { createDirectory } = useCreateNewTreeDirectory();
  const directories = useAppSelector((state) => state.fileSystemReducer.files);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.authSlice.user);
  const { data = [] } = useGetAllFilesQuery(undefined, {
    skip: !user,
  });

  const directoriesTreeArray = useMemo(
    () => prepareDirectoriesList(directories),
    [directories]
  );

  useEffect(() => {
    if (data && data.length) {
      dispatch(setFile(data));
    }
  }, [data, dispatch]);

  const handleCreateDirectory = () => {
    createDirectory();
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Tree</h2>
      <div className={styles.content}>
        <div className={styles.treeContainer}>
          <ItemsList itemList={directoriesTreeArray} />
        </div>
        <div className={styles.createButton}>
          <button onClick={handleCreateDirectory}>New directory</button>
        </div>
      </div>
    </aside>
  );
}
