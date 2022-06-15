import { useFormik } from "formik";
import React from "react";
import Logo from "src/assets/icons/logo.svg";
import { FormikInput } from "src/components/Input";
import { PasswordInput } from "src/components/Input";
import { object, string } from "yup";

const Login = () => {
  const validationSchema = object().shape({
    username: string().required("Username is required."),
    password: string().required("Password is required."),
  });

  const form = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { handleSubmit } = form;

  return (
    <div className="container-fluid vh-100">
      <div className="row align-items-center h-100">
        <div className="col-md-6 text-center">
          <h2 className="heading">Cisco</h2>
          <h3 className="subheading">VA Launch Pad</h3>
        </div>
        <div className="col-md-6">
          <div className="row justify-content-center align-items center">
            <div className="col-md-6">
              <div className="text-center">
                <img alt="Cisco" src={Logo} />
              </div>
              <form action="#" onSubmit={handleSubmit} className="mt-4">
                <h5>Login</h5>
                <div className="form-group mt-3">
                  <div className="input-group">
                    <FormikInput
                      id="username"
                      form={form}
                      placeholder="Username"
                    />
                  </div>
                  <div className="input-group mt-4">
                    <PasswordInput
                      id="password"
                      form={form}
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary mt-4 px-3">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
