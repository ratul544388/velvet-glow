import MainLayout from "@/layouts/main-layout";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
    ],
  },
]);
