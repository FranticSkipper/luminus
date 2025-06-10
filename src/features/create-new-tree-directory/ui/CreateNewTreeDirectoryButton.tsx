import { useCreateNewTreeDirectory } from "../model/useCreateNewTreeDirectory";

export function CreateNewTreeDirectoryButton() {
  const { createDirectory } = useCreateNewTreeDirectory();

  return <button onClick={createDirectory}>Create new directory</button>;
}
