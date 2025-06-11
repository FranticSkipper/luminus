export interface FileItems {
  id: string;
  name: string;
  type: "file" | "directory";
  parentId: string | null;
}
