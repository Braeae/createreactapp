import React from "react";
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
        <strong className="temperature" id="temperature">
          {" "}
        </strong>
        <span className="units">
          <p id="celsiusLink" className="active">
            {" "}
            °C
          </p>{" "}
          |<p id="fahrenheitLink">°F</p>
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
            <li>
              Max feels: <span id="feels"> </span>°
            </li>
          </ul>
          <p id="codeLink">
            <strong>
              <a
                href="https://github.com/Braeae/plusproject"
                target="_blank"
                rel="noreferrer"
              >
                Open-source code
              </a>
              by Busra
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
