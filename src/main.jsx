import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Login } from "./components/login/index.jsx";
import { ProtectedRoute } from "./components/protectedRoute/index.jsx";
import { Home } from "./components/home/index.jsx";
import { Logout } from "./components/login/logout.jsx";
import { LoggedOutProtectedRoute } from "./components/protectedRoute/loggedout.jsx";

const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/logout", element: <Logout /> },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      { path: "/secure", element: <div>Secure</div> },
      { path: "/contact", element: <div>contact</div> },
      { path: "/teacher", element: <div>Teacher page</div> },
    ],
  },
  {
    path: "/about",
    element: <LoggedOutProtectedRoute />,
    children: [{ path: "", element: <div>About</div> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
