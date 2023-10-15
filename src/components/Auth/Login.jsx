import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../data/user";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errmsg, setErrMsg] = useState({
    email: "",
    password: "",
  });

  const readValue = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });

    // Clear previous error message for the field being updated
    setErrMsg({ ...errmsg, [name]: "" });

    // Call validation functions
    if (name === "email") {
      validateEmail(value);
    } else if (name === "password") {
      validatePass(value);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Check for validation errors
    if (validateEmail(user.email) || validatePass(user.password)) {
      toast.error("Please check the errors.");
    } else {
      console.log("data =", user);
      loginUser(user);
    }
  };

  const validateEmail = (email) => {
    if (email === "") {
      setErrMsg({ ...errmsg, email: "Email field should not be empty" });
      return true; // Indicate an error
    } else {
      let regx = /^\S+@\S+\.\S+$/;
      if (!regx.test(email)) {
        setErrMsg({ ...errmsg, email: "Invalid email format" });
        return true; // Indicate an error
      }
    }
    return false; // No error
  };

  const validatePass = (password) => {
    if (password === "") {
      setErrMsg({ ...errmsg, password: "Password field should not be empty" });
      return true; // Indicate an error
    } else {
      let regx = /^[a-zA-Z0-9\s]+$/;
      if (!regx.test(password)) {
        setErrMsg({ ...errmsg, password: "Invalid password format" });
        return true; // Indicate an error
      }
    }
    return false; // No error
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="display-3 text-secondary">Login</h3>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-lg-6 offset-md-3 col-lg-6 offset-md-2 col-sm-12">
          <div className="card">
            <div className="card-body">
              <form autoComplete="off" onSubmit={submitHandler}>
                <div className="form-group mt-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={readValue}
                    className="form-control"
                    required
                  />
                  {/* Display error message if any */}
                  {errmsg.email && (
                    <div className="text-danger">{errmsg.email}</div>
                  )}
                </div>

                <div className="form-group mt-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={readValue}
                    className="form-control"
                    required
                  />
                  {/* Display error message if any */}
                  {errmsg.password && (
                    <div className="text-danger">{errmsg.password}</div>
                  )}
                </div>

                <div className="form-group mt-2">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-outline-success"
                  />
                  <div className="float-end d-flex align-items-center">
                    <strong className="text-success">Are you a new user?</strong>
                    <Link to={"/register"} className="btn btn-link">
                      Register
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;