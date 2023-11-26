import React from "react";
import "../styles/css/HourlyForecastCard.css";
import { Card } from "react-bootstrap";

const HourlyForecastCard = (props) => {
  return (
    <>
      <Card className="card-hourly" style={{ width: "10rem" }}>
        <Card.Header>{props.hourOfDay}</Card.Header>
        <Card.Body>
          <Card.Text>{props.temp}</Card.Text>
        </Card.Body>
        <Card.Footer>{props.condition}</Card.Footer>
      </Card>
    </>
  );
};
export default HourlyForecastCard;
