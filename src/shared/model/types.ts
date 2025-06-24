export enum ItemTypes {
  "DIRECTORY" = "directory",
  "FILE" = "file",
}

export interface DirectoryTree {
  name: string;
  type: string;
  parentId: string | null;
  ownerId: string;
}
