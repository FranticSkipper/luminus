import { useOpenFile } from "../model/useOpenFile";

interface Props {
  children: React.ReactNode;
}

export function OpenFileButton({ children }: Props) {
  const { openFile } = useOpenFile();

  return <button onClick={openFile}>{children}</button>;
}
