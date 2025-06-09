import { createBrowserRouter } from "react-router";
import { HomePage } from "@pages/home/HomePage";
import { EditorPage } from "@pages/editor/EditorPage";
import { LogupPage } from "@pages/auth/logup/LogupPage";
import { BaseLayout } from "@shared/ui/layouts/BaseLayout/BaseLayout";

export const router = createBrowserRouter([
  {
    element: <BaseLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/editor",
        element: <EditorPage />,
      },
      {
        path: "/registration",
        element: <LogupPage />,
      },
    ],
  },
]);
