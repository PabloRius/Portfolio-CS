import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Header from "../components/header/header";
import Footer from "../components/footer";

import Home from "../views/home";
import Error from "../views/error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
