import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "../styles/css/WeeklyAndHourlyForecast.css";
import image from "../assets/sunnyDay.jpg";
import DailyForecastCard from "./DailyForecastCard";

const WeeklyForecast = () => {
  const [dayForecast, setDayForecast] = useState([
    {
      day: "Monday",
      high: "2° C",
      low: "-4* C",
      condition: "windy",
      source: image,
    },
    {
      day: "Tuesday",
      high: "2° C",
      low: "-4* C",
      condition: "windy",
      source: image,
    },
    {
      day: "Wednesday",
      high: "2° C",
      low: "-4* C",
      condition: "windy",
      source: image,
    },
    {
      day: "Thursday",
      high: "2° C",
      low: "-4* C",
      condition: "windy",
      source: image,
    },
    {
      day: "Friday",
      high: "2° C",
      low: "-4* C",
      condition: "windy",
      source: image,
    },
  ]);

  return (
    <>
      <Container fluid className="main-content">
        <Container className="search">
          <InputGroup className="mb-3 inputGroup">
            <InputGroup.Text
              id="inputGroup-sizing-sm"
              className="inputGroup-text"
            >
              Enter Location
            </InputGroup.Text>
            <Form.Control
              aria-label="sm"
              aria-describedby="inputGroup-sizing-sm"
              className="inputGroup-form"
            />
          </InputGroup>
        </Container>
        <Container className="location">
          <h2>Boston</h2>
        </Container>
        <Container className="temperature">
          <h1>2° C</h1>
        </Container>
        <Container className="condition">
          <h3>Windy</h3>
          <br />
          <h4>10° C High -2° C Low</h4>
          <br />
          <hr></hr>
        </Container>
        <Container className="dailyReport">
          <Row className="row">
            {dayForecast.map((period) => {
              return (
                <DailyForecastCard
                  source={period.source}
                  dayOfWeek={period.day}
                  high={period.high}
                  low={period.low}
                  condition={period.condition}
                />
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};
export default WeeklyForecast;
