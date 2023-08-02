import React, { useEffect, useState } from "react";
import { SignUp } from "./signup";
import { SignIn } from "./signin";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [isNew, setIsNew] = useState(true);
  const changeLogIn = () => setIsNew((prev) => !prev);

  useEffect(() => {
    if (localStorage.getItem("demo_user")) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h2 className="">Login Page</h2>
      <p onClick={changeLogIn} className="mb-10">
        {!isNew ? "Sign In" : "Sign Up"} instead
      </p>
      {!isNew ? <SignUp /> : <SignIn />}
    </div>
  );
};

/**
 * <input style="justify-content: start; margin: 1rem" class="justify-content-start" />
 */
