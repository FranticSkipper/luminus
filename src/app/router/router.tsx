import { createBrowserRouter } from "react-router";
import { BaseLayout } from "@shared/ui/layouts/BaseLayout";
import { WithHeaderLayout } from "../layout/WithHeaderLayout";
import { WithDirectoriesTreeLayout } from "@pages/editor/ui/layouts/WithDirectoriesTreeLayout";
import { HomePage } from "@pages/home/HomePage";
import { LogupPage } from "@pages/auth/logup/LogupPage";
import { EditorPage } from "@pages/editor";

export const router = createBrowserRouter([
  {
    element: <WithHeaderLayout />,
    children: [
      {
        element: <BaseLayout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/registration",
            element: <LogupPage />,
          },
        ],
      },
      {
        element: <WithDirectoriesTreeLayout />,
        children: [
          {
            path: "/editor",
            element: <EditorPage />,
          },
        ],
      },
    ],
  },
]);
