import React from "react";
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import {Login} from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/login"} />
  },
  {
    path: "/login",
    element: <Login />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;