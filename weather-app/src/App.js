import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WeeklyForecast from "./components/WeeklyForecast";
import HourlyForecast from "./components/HourlyForecast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WeeklyForecast />} />
          <Route path="/hour" element={<HourlyForecast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
