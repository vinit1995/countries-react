import { React, useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col, Button, Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import CountryCard from "../../shared/CountryCard";
import Banner from "../../shared/Banner";
import apiService from "../../services/api-service";
import Loader from "../../shared/Loader";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(10);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  }
  const handleLoadMore = () => {
    setCount((prevCount) => prevCount + 10);
  };

  const filteredCountries = useMemo(() => {
    if (selectedRegion === "All") return countries;
    return countries.filter((country) => country.region === selectedRegion);
  }, [selectedRegion, countries]);

  const fetchCountries = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiService.getCountries();
      setCountries(data);
    } catch (error) {
      console.error("Failed to fetch countries.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return loading ? (
    <Loader />
  ) : (
    <Container fluid className="p-0">
      <Navbar bg="light" expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand href="#">Countries</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {[
                "All",
                ...Array.from(
                  new Set(countries.map((country) => country.region))
                ),
              ].map((region) => (
                <Nav.Link
                  key={region}
                  onClick={() => {
                    setSelectedRegion(region);
                    setCount(10);
                  }}
                  active={selectedRegion === region}
                >
                  {region}
                </Nav.Link>
              ))}

              {isAuthenticated && (
                <Button
                  variant="outline-danger"
                  onClick={handleLogout}
                  className="ms-3"
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="text-center my-4">
        <Row className="align-items-center">
          <Col>
            <hr className="header-border-top w-100 mt-auto d-inline-block" />
          </Col>
          <Col xs="auto">
            <h1 className="mx-3 text-uppercase">Welcome</h1>
          </Col>
          <Col>
            <hr className="header-border-bottom w-100 mb-auto d-inline-block" />
          </Col>
        </Row>
        <Row className="g-3 h-75">
          <Col md={12} className="mx-auto">
            <Banner countries={countries} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="g-3">
          {filteredCountries.slice(0, count).map((country, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index}>
              <CountryCard country={country} index={index} />
            </Col>
          ))}
        </Row>

        {count < filteredCountries.length && (
          <div className="text-center my-4">
            <Button variant="dark" onClick={handleLoadMore}>
              Load More
            </Button>
          </div>
        )}
      </Container>

      <footer className="bg-light text-center py-4 mt-4 border-top">
        <div className="mb-3">
          <a href="#" className="text-dark mx-2 fs-4">
            <i className="bi bi-google"></i>
          </a>
          <a href="#" className="text-dark mx-2 fs-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="text-dark mx-2 fs-4">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="text-dark mx-2 fs-4">
            <i className="bi bi-twitter"></i>
          </a>
        </div>
        <p className="mb-0">example@email.com</p>
        <small>&copy; 2025 Name. All rights reserved.</small>
      </footer>
    </Container>
  );
};

export default Home;
