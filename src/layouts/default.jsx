import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Footer from "../components/footer/Footer";
import Sidebar from "../components/sidebar/Sidebar";
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
  const [opened, setOpened] = useState(false);

  const toggleDrawer = () => {
    setOpened(!opened);
  };
  return (
    <div className="defaultLayout">
      <div className="main">
        <Sidebar toggleDrawer={toggleDrawer} className="sideBar" />
        <div className="body">
          <RouterProvider router={router} />
          <Footer className="footer" />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
