import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home.jsx";
import { LoginPage } from "./pages/login.jsx";
import { HomeAdminPage } from "./pages/home-admin.jsx";
import { HeaderComponent } from "./components/header.jsx";
import { ContatoPage } from "./pages/contato.jsx";

export const routes = createBrowserRouter(
  [
    {
      path: "*",
      element: <Navigate to="/" replace={true} />,
    },
    {
      path: "/",
      element: (
        <>
          <HeaderComponent />
          <HomePage />
        </>
      ),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/home",
      element: <HomeAdminPage />,
    },
    {
      path: "/contato",
      element: (
        <>
          <HeaderComponent />
          <ContatoPage />
        </>
      ),
    },
  ],
  { basename: "/fatec-pi-2-semestre" }
);
