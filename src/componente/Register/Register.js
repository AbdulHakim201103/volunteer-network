import React from "react";
import { Link } from "react-router-dom";
import Social from "../Social/Social";
import "./Register.css";

const Register = () => {
  return (
    <div className=" container my-5 ">
      <div className="form-container rounded border bg-light border-dark w-75 m-auto">
        <h2 className="text-center my-4 text">Please Register</h2>
        <form className="w-50 m-auto">
          <input
            className="d-block w-100 mb-3 rounded border-1 p-2"
            type="text"
            placeholder="Name"
            required
          />
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
          <div className="my-3">
            <input className="me-3" type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms">Accept Terms and conditions</label>
          </div>
          <input className="d-block btn btn-primary w-100" type="submit" value="Register" />
        </form>
        <div className="w-50 m-auto my-3">
          <p className="text-center">
            Already have an account?
            <Link className="link-btn" to="/login">
              Please Login
            </Link>
          </p>
        </div>
        <Social></Social>
      </div>
    </div>
  );
};

export default Register;
