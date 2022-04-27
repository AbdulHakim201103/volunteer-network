import React from "react";
import { Link } from "react-router-dom";
import Social from "../Social/Social";
import "./Login.css";

const Login = () => {
  return (
    <div className=" container my-5 ">
    <div className="form-container rounded border bg-light border-dark w-75 m-auto">
      <h2 className="text-center my-4 text">Please Login</h2>
      <form  className="w-50 m-auto">
        <input
          className="d-block w-100 mb-3 rounded border-1 p-2"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="d-block w-100  mb-3 rounded border-1 p-2"
          type="password"
          placeholder="Password"
          required
        />
        <input className="d-block btn btn-primary w-100" type="submit" value="Login" />
      </form>
      <div className="w-50 m-auto my-3">
        <p className="text-center">
          New to Volunteer Network?
          <Link className="link-btn text-decoration-none" to="/register">
            Create an Account
          </Link>
        </p>
      </div>
      <div className="w-50 m-auto my-3">
        <p className="text-center ">
          Forget Password?
          <button className="btn text-decoration-none btn-link">
            Reset Password
          </button>
        </p>
      </div>
      <Social></Social>
    </div>
  </div>
    
  )
};

export default Login;
