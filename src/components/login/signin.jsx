import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const SignInSchema = yup.object().shape({
  username: yup.string().required("username is required"),
  password: yup.string().required("Password ke bina login?"),
});

export const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Sign In</h3>
      <Formik
        initialValues={{ username: "", password: "" }}
        validationSchema={SignInSchema}
        onSubmit={(values) => {
          console.log({ values });
          // Add submit logic here
          localStorage.setItem("demo_user", true);
          navigate("/");
        }}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          touched,
          errors,
        }) => (
          <form noValidate onSubmit={handleSubmit}>
            <div className="mt-2">
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="username"
                className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${
                  touched.username &&
                  !!errors.username &&
                  "border border-red-700"
                }`}
                placeholder="janesmith"
              />
              {touched.username && !!errors.username && (
                <span className="text-xs text-red-700">{errors.username}</span>
              )}
            </div>
            <div className="mt-2">
              <input
                type="text"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="password"
                className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 ${
                  touched.password &&
                  !!errors.password &&
                  "border border-red-700"
                }`}
                placeholder="password"
              />
              {touched.password && !!errors.password && (
                <span className="text-xs text-red-700">{errors.password}</span>
              )}
            </div>
            <button type="submit">Login</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
