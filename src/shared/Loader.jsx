import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="grow" variant="dark"/>
    </div>
  );
};

export default Loader;
