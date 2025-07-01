import { RouterProvider } from "react-router";
import { router } from "./router/index";
import { useCheckAuth } from "@shared/hooks/useCheckAuth";

export const App = () => {
  useCheckAuth();

  return <RouterProvider router={router} />;
};
