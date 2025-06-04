import Logout from "@entities/auth/ui/Logout/Logout";
import { LoginFeature } from "@features/auth-login";

export default function Auth() {
  const isAuth = false;

  return isAuth ? <Logout /> : <LoginFeature />;
}
