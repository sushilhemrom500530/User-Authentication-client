import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import MainLayout from "../layouts/main";
import NotFound from "../view/not-round";
import Signin from "../view/auth/signin";
import Signup from "../view/auth/signup";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <MainLayout />,
  },
  {
    path: "auth/login",
    element: <Signin />,
  },
  {
    path: "auth/register",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default Router;
