import { useRegistrationMutation } from "@entities/auth/api/authApi";
import { useState } from "react";

export function useAuthLogup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userRegistration] = useRegistrationMutation();

  function onRegistration() {
    userRegistration({ email, password });
  }

  return {
    onRegistration,
    setEmail,
    setPassword,
    data: {
      email,
      password,
    },
  };
}
