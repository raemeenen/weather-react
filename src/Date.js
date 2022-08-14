import React from "react";
import "./Date.css";

export default function Date() {
  let currentDate = "Wednesday 3:55";

  return (
    <div className="Date">
      Last updated: <span>{currentDate}</span>
    </div>
  );
}
