import { OpenFileButton } from "@features/open-file/ui";

export function TreeDirectoryFile({ children }: { children: React.ReactNode }) {
  return <OpenFileButton>{children}</OpenFileButton>;
}
