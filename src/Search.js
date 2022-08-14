import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="enter-city">
        <input
          type="text"
          placeholder="Search for a city"
          className="col-sm-6 enter-city-input"
        />
        <button
          type="submit"
          value="Submit"
          className="col-sm-1 btn btn-primary submit"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button
          type="submit"
          value="Submit"
          className="col-sm-1 btn btn-success submit"
        >
          <i className="fa-solid fa-location-dot"></i>
        </button>
      </form>
    </div>
  );
}
