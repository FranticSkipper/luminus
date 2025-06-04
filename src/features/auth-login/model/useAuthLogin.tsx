import { useState } from "react";

export default function useAuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShow, setIsShow] = useState(false);

  function userLogin() {
    //TODO: login  action
  }

  function closeModal() {
    setIsShow(false);
  }

  function openModal() {
    setIsShow(true);
  }

  return {
    userLogin,
    setEmail,
    setPassword,
    closeModal,
    openModal,
    values: { email, password, isShow },
  };
}
