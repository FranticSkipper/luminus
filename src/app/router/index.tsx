import { createBrowserRouter } from "react-router";
import { HomePage } from "@features/pages/home/HomePage";
import { EditorPage } from "@features/pages/editor/EditorPage";
import { LogupPage } from "@features/pages/auth/logup/LogupPage";
import { BaseLayout } from "@shared/ui/layouts/BaseLayout";
import { WithHeaderLayout } from "../layout/WithHeaderLayout";
import { WithDirectoriesTreeLayout } from "@features/pages/editor/ui/layouts/WithDirectoriesTreeLayout";

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
