// pages/Login.js
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/reducers/authSlice";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import loginImg from "../../assets/login-img.png";
import {
  FaGoogle,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const isFormValid =
    !errors.username &&
    !errors.password &&
    formData.username &&
    formData.password;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    if (name === "username") {
      setErrors({
        ...errors,
        username: value ? "" : "Username is required.",
      });
    }

    if (name === "password") {
      const passwordRegex =
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
      setErrors({
        ...errors,
        password: passwordRegex.test(value)
          ? ""
          : "Password must be at least 8 characters long, include 1 capital letter, 1 number, and 1 special character.",
      });
    }
  };
  const handleLogin = () => {
    if (isFormValid) {
      dispatch(login(true));
      navigate("/home");
    } else {
      navigate("/login");
    }
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex align-items-center justify-content-center bg-light"
    >
      <Row className="w-lg-75 w-md-75 bg-white shadow-lg rounded-3 overflow-hidden">
        <Col
          xs={12}
          md={6}
          className="p-4 p-md-5 d-flex flex-column align-items-center align-items-md-start text-center text-md-start"
        >
          <h1 className="mb-4">Sign In</h1>
          <p>
            New user?{" "}
            <a href="#" className="text-primary">
              Create an account
            </a>
          </p>
          <Form className="w-100">
            <Form.Group className="mb-3" controlId="formUsername">
              <Form.Control
                type="text"
                placeholder="Username or Email"
                name="username"
                value={formData.username}
                onChange={handleChange}
                isInvalid={!!errors.username}
                className="w-100"
                required
              />
              {errors.username && (
                <Form.Text className="text-danger">{errors.username}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <InputGroup>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  required
                />
                <Button
                  variant="outline-secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="d-flex align-items-center"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputGroup>
              {errors.password && (
                <Form.Text className="text-danger">{errors.password}</Form.Text>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCheckbox">
              <Form.Check type="checkbox" label="Keep me signed in" />
            </Form.Group>

            <Button
              variant="dark"
              type="button"
              className="w-100 mb-3"
              onClick={handleLogin}
              disabled={!isFormValid}
            >
              Sign In
            </Button>
          </Form>

          <div className="text-center mt-4 m-auto">
            <span className="text-muted">Or Sign In With</span>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-dark fs-4">
                <FaGoogle />
              </a>
              <a href="#" className="text-dark fs-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-dark fs-4">
                <FaLinkedin />
              </a>
              <a href="#" className="text-dark fs-4">
                <FaTwitter />
              </a>
            </div>
          </div>
          <Form.Text className="text-muted mt-3">
            <div>
              <b>For Example:</b>
            </div>
            <div>
              <b>Username:</b>
              <span className="text-danger"> admin</span>
            </div>
            <div>
              <b>Username:</b>
              <span className="text-danger"> Admin@1234</span>
            </div>
          </Form.Text>
        </Col>

        <Col
          xs={12}
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center"
        >
          <img
            src={loginImg}
            alt="login-img"
            className="img-fluid"
            style={{ maxHeight: "600px" }}
          />;
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
