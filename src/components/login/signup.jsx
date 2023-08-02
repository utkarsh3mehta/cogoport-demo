import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

export const SignUp = () => {
  const {} = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cPassword: "",
      dob: "",
    },
  });

  return (
    <div>
      <h3>Sign Up</h3>
    </div>
  );
};
