import { createBrowserRouter, Navigate } from "react-router-dom";
import CategoryNews from "../components/CategoryNews";
import Login from "../components/Login";
import AuthLayout from "../layout/AuthLayout";
import HomeLayout from "../layout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Navigate to={"/category/01"}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <h1>news</h1>,
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Error</h1>,
  },
]);

export default router;