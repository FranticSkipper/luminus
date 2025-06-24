import { useAppDispatch } from "@app/store/hooks/useAppDispatch";
import { useLazyAutoLoginQuery } from "@entities/auth/api/authApi";
import { setUser } from "@entities/auth/slice";
import { CookieService } from "@shared/lib/cookieService";
import { useEffect } from "react";

export function useCheckAuth() {
  const [trigger] = useLazyAutoLoginQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    requestLogin();

    async function requestLogin() {
      const token = CookieService.get("authToken");

      if (!token) {
        return;
      }

      const res = await trigger(token);
      const userData = res.data?.user;

      if (userData) {
        dispatch(setUser(userData));
      }
    }
  }, []);

  return {};
}
