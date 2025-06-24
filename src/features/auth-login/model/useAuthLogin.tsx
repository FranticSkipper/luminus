import { useAppDispatch } from "@app/store/hooks/useAppDispatch";
import { useLoginMutation } from "@entities/auth/api/authApi";
import { setUser } from "@entities/auth/slice";
import { CookieService } from "@shared/lib/cookieService";
import { useState } from "react";

export default function useAuthLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin] = useLoginMutation();
  const dispatch = useAppDispatch();

  async function login() {
    const res = await userLogin({ email, password });

    if (res.data.status === "success") {
      const token = res.data.token;

      if (token) {
        CookieService.set("authToken", token);

        const user = res.data.user;

        dispatch(setUser(user));
      }
    }
  }

  return {
    login,
    setEmail,
    setPassword,
    values: { email, password },
  };
}
