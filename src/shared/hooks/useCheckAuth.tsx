import { useLazyAutoLoginQuery } from "@entities/auth/api/authApi";
import { CookieService } from "@shared/lib/cookieService";
import { useEffect } from "react";

export function useCheckAuth() {
  const [trigger] = useLazyAutoLoginQuery();

  useEffect(() => {
    requestLogin();

    function requestLogin() {
      const token = CookieService.get("authToken");

      if (!token) {
        return;
      }

      trigger(token);
    }
  }, []);

  return {};
}
