import { useDirDrop } from "../model/useDirDrop";

interface Props {
  parentID: string;
  children: React.ReactNode;
}

export const DirDrop = ({ parentID, children }: Props) => {
  const { itemRef } = useDirDrop(parentID);

  return <div ref={itemRef}>{children}</div>;
};
