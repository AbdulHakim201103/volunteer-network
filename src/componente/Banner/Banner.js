import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container">
      <div>
        <h1 className="banner-header text-uppercase text-center my-5">I grow by helping people in need.</h1>
      </div>
      <div className="w-50 mx-auto my-5">
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
          <Button className="bg-primary text-white" variant="outline-primary ">
            Search
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Banner;
