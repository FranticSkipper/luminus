import Button from "@shared/ui/Button/Button";
import { useAuthLogout } from "../model/useAuthLogout";

export default function AuthLogoutButton() {
  const { userLogout } = useAuthLogout();

  return <Button onClick={userLogout}>Logout</Button>;
}
