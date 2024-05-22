import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { HomeAdminPage } from "./pages/home-admin";

export const routes = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" replace={true} />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <HomeAdminPage />,
  },
]);
