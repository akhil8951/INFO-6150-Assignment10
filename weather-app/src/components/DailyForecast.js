import React from "react";
import "../styles/css/DailyForecast.css";
import { Card } from "react-bootstrap";

const DailyForecast = (props) => {
  return (
    <>
      <Card className="card-daily" style={{ width: "14rem" }}>
        <Card.Header>{props.dayOfWeek}</Card.Header>
        <Card.Body>
          <Card.Title>Weather</Card.Title>
          <Card.Img variant="top" />
          <Card.Text>
            <h5>
              {props.high} ....... {props.low}
            </h5>
          </Card.Text>
        </Card.Body>
        <Card.Footer>{props.condition}</Card.Footer>
      </Card>
    </>
  );
};
export default DailyForecast;
