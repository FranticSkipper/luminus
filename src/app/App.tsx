import { RouterProvider } from "react-router";
import { router } from "./router/index";

export const App = () => {
  return <RouterProvider router={router} />;
};
