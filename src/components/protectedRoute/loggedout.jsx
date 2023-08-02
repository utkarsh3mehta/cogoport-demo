import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const LoggedOutProtectedRoute = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      if (localStorage.getItem("demo_user")) {
        navigate("/");
      } else {
        setIsLoggedOut(true);
      }
    } catch (err) {
      navigate("/");
    }
  }, []);

  return <Outlet />;
};
