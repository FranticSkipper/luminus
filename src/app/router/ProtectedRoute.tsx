import { useAppSelector } from "@app/store/hooks/useAppSelector";
import { Navigate, Outlet } from "react-router";

export function ProtectedRoute() {
  const user = useAppSelector((state) => state.authSlice.user);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
