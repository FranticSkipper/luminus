import { createBrowserRouter } from "react-router";
import { BaseLayout } from "@shared/ui/layouts/BaseLayout";
import { WithHeaderLayout } from "../layout/WithHeaderLayout";
import { HomePage } from "@pages/home/HomePage";
import { LogupPage } from "@pages/auth/logup/LogupPage";
import { EditorPage } from "@pages/editor";
import { LoginPage } from "@pages/auth/login/LoginPage";
import { ProfilePage } from "@pages/profile/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

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
            element: <PublicRoute />,
            children: [
              {
                path: "/registration",
                element: <LogupPage />,
              },
              {
                path: "/login",
                element: <LoginPage />,
              },
            ],
          },
          {
            element: <ProtectedRoute />,
            children: [
              {
                path: "user/:userID",
                element: <ProfilePage />,
              },
            ],
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/editor/:id?",
            element: <EditorPage />,
          },
        ],
      },
    ],
  },
]);
