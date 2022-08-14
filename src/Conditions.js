import React from "react";
import "./Conditions.css";

export default function Conditions() {
  let conditionsData = {
    description: "Thunderstorms",
    humidity: "50",
    wind: "3"
  };
  return (
    <ul className="Conditions">
      <li className="description">{conditionsData.description}</li>
      <li className="humidity">
        Humidity: <span>{conditionsData.humidity}</span>%
      </li>
      <li className="wind-speed">
        Wind: <span>{conditionsData.wind}</span> mph
      </li>
    </ul>
  );
}
