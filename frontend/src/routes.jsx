import { Navigate, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { HomeAdminPage } from "./pages/home-admin";
import { Header } from "./components/header";
import { ContatoPage } from "./pages/contato";

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
          <Header />
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
          <Header />
          <ContatoPage />
        </>
      ),
    },
  ],
  { basename: "/fatec-pi-2-semestre" }
);
