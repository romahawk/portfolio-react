import { createBrowserRouter } from "react-router";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
]);
