import React from "react";
import google from '../../image/google.png'
import "./Social.css";

const Social = () => {
  return (
    <div>
      <div className="d-flex w-50 my-3 m-auto justify-content-center align-items-center">
        <div className="left me-3"></div>
        <p className="text-success">Or</p>
        <div className="right ms-3"></div>
      </div>
      <div className="w-50 m-auto">
        <button className="btn border bg-white mb-5 w-100">
          <img className="me-3" src={google} width="30px" alt="" /> Continue With Google
        </button>
      </div>
    </div>
  );
};

export default Social;
