import React, { useState } from "react";
import "../styles/css/WeeklyAndHourlyForecast.css";
import { Container, Row } from "react-bootstrap";
import HourlyForecastCard from "./HourlyForecastCard";

const HourlyForecast = () => {
  const [hourForecast, setHourForecast] = useState([
    {
      time: "1 PM",
      current_temp: "2° C",
      current_condition: "windy",
    },
    {
      time: "2 PM",
      current_temp: "2° C",
      current_condition: "windy",
    },
    {
      time: "3 PM",
      current_temp: "2° C",
      current_condition: "windy",
    },
    {
      time: "4 PM",
      current_temp: "2° C",
      current_condition: "windy",
    },
    {
      time: "5 PM",
      current_temp: "2° C",
      current_condition: "windy",
    },
    {
      time: "6 PM",
      current_temp: "2° C",
      current_condition: "windy",
    },
    {
      time: "7 PM",
      current_temp: "2° C",
      current_condition: "windy",
    },
  ]);

  return (
    <>
      <Container fluid className="main-content">
        <div style={{ marginTop: "10rem" }}></div>
        <Container className="location">
          <h2>Boston</h2>
        </Container>
        <Container className="day">
          <h3>Monday</h3>
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
        <Container className="HourlyReport">
          <Row className="row">
            {hourForecast.map((object) => {
              return (
                <HourlyForecastCard
                  hourOfDay={object.time}
                  temp={object.current_temp}
                  condition={object.current_condition}
                />
              );
            })}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default HourlyForecast;
