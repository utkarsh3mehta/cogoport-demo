import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const onLogout = () => navigate("/logout");
  return (
    <div>
      Hello world!
      <br />
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};
