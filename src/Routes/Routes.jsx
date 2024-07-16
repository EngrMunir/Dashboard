import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import UserManagement from "../pages/UserManagement/UserManagement";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard></Dashboard>,
      children:[
        {
            path:'userManagement',
            element:<UserManagement></UserManagement>
        },
      ]
    },
  ]);