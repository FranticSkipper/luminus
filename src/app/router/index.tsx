import { createBrowserRouter } from "react-router";
import { HomePage } from "@pages/home/HomePage";
import { EditorPage } from "@pages/editor/EditorPage";
import { BaseLayout } from "@shared/layouts/BaseLayout/BaseLayout";

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
    ],
  },
]);
