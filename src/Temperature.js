import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let temperatureData = {
    temperature: "82",
    imageURL: "https://openweathermap.org/img/wn/10d@2x.png"
  };
  return (
    <div className="clearfix Temperature">
      <img
        src={temperatureData.imageURL}
        alt=" "
        width="100"
        className="weather-icon img-fluid"
      />
      <span className="degrees">{temperatureData.temperature}</span>
      <span className="units">
        <a href="/" className="active">
          F°
        </a>{" "}
        |<a href="/">C°</a>
      </span>
    </div>
  );
}
