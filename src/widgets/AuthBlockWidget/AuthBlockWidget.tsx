import { useAppSelector } from "@app/store/hooks/useAppSelector";
import { UserMenu } from "./ui/UserMenu/UserMenu";
import { AuthButtonsWidget } from "@widgets/AuthButtonsWidget";

export function AuthBlockWidget() {
  const isAuth = useAppSelector((state) => state.authSlice.user);

  return isAuth ? <UserMenu /> : <AuthButtonsWidget />;
}
