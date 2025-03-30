import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <p className="fs-4 text-muted">Oops! The page you're looking for doesn't exist.</p>
      <Button as={Link} to="/home" variant="dark" className="mt-3">
        Go Back to Home
      </Button>
    </Container>
  );
};

export default NotFound;
