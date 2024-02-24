import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Footer from "../components/footer";

import Home from "../views/home";
import Error from "../views/error";
import ProjectAPI from "../views/project_api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "projects",
    element: <ProjectAPI />,
    errorElement: <Error />,
  },
]);

const DefaultLayout = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
