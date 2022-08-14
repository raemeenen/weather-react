import React from "react";
import "./Weather.css";
import Search from "./Search";
import Date from "./Date";
import Temperature from "./Temperature";
import Conditions from "./Conditions";

export default function Weather() {
  let weatherData = {
    city: "Kansas City"
  };
  return (
    <div className="Weather">
      <Search />
      <div className="row">
        <h1 className="current-city">{weatherData.city}</h1>
        <Date />
      </div>
      <div className="row current-weather">
        <div className="col">
          <Temperature />
        </div>
        <div className="col">
          <Conditions />
        </div>
      </div>
    </div>
  );
}
