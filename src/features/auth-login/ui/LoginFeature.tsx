import { useState } from "react";
import { LoginButton } from "./LoginButton";
import { LoginDialog } from "./LoginDialog";

export const LoginFeature = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    console.log(1223);

    setIsDialogOpen(false);
  };

  return (
    <>
      <LoginButton onClick={openDialog} />
      <LoginDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </>
  );
};
