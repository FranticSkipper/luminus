import { useAppDispatch } from "@app/store/hooks/useAppDispatch";
import { logout } from "@entities/auth/slice";
import { CookieService } from "@shared/lib/cookieService";
import { useNavigate } from "react-router";

export function useAuthLogout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function userLogout() {
    CookieService.remove("authToken");
    dispatch(logout());
    navigate("/");
  }

  return { userLogout };
}
