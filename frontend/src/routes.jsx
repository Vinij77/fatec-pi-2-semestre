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
      element: <Navigate to="/fatec-pi-2-semestre" replace={true} />,
    },
    {
      path: "/fatec-pi-2-semestre",
      element: (
        <>
          <Header />
          <HomePage />
        </>
      ),
    },
    {
      path: "/fatec-pi-2-semestre/login",
      element: <LoginPage />,
    },
    {
      path: "/fatec-pi-2-semestre/home",
      element: <HomeAdminPage />,
    },
    {
      path: "/fatec-pi-2-semestrefatec-pi-2-semestre/contato",
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
