import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const CountryCard = ({ country, index }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Row>
          <Col>
          <Card.Title>{country.name}</Card.Title>
          <Card.Text>{country.region}</Card.Text>        
          </Col>
          <Col>
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="img-fluid border rounded mt-2 country-flag"          
        />
          </Col>

        </Row>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
