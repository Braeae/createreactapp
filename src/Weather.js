import React, { useState } from "react";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather() {
  return (
    <div>
      <form className="search-form" id="search-form" autocomplete="off">
        <label className="search-form-label" for="inlineFormInputName2"></label>
        <input
          type="text"
          className="search-form-input"
          id="search-form-input"
          placeholder="Enter city"
        />
        <button type="submit" className="submit-btn">
          SEARCH
        </button>
        <button
          type="button"
          className="current-btn"
          id="currentLocationButton"
        >
          Current Location
        </button>
      </form>

      <div className="col-md-4 align-self-center" id="firstCol">
        <p className="cityName" id="city-name">
          Amsterdam
        </p>

        <p className="date" id="date"></p>
        <p id="weatherIs">Partly sunny</p>
      </div>

      <div className="col-md-4 align-self-center" id="firstCol">
        <img
          className="main-img"
          id="mainImg"
          src="/img/sunny.png"
          alt="Cloudy"
          width="90px"
        />
      </div>

      <div className="col-md-4 align-self-center" id="firstCol">
        <strong className="temperature" id="temperature">
          {" "}
        </strong>
        <span className="units">
          <a href="#" id="celsiusLink" className="active">
            {" "}
            °C
          </a>{" "}
          |
          <a href="#" id="fahrenheitLink">
            °F
          </a>
        </span>

        <div className="align-self-center">
          <ul>
            <li>
              Humidity: <span id="humidity"></span>%
            </li>
            <li>
              Wind: <span id="wind"></span> m/h
            </li>
            <li>
              Feels Like: <span id="feels"> </span>°
            </li>
          </ul>
        </div>
      </div>
      <Forecast />
    </div>
  );
}
