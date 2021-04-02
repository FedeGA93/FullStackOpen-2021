import { useState, useEffect, useRef } from "react";
import { Weather } from "./Weather";
import env from "react-dotenv";
import axios from "axios";

export const CountryData = ({ country }) => {
  const [showInfo, setShowInfo] = useState(false);
  let capital = useRef(null);
  let temperature = useRef(null);
  let weatherIcon = useRef(null);
  let windSpeed = useRef(null);
  let windDir = useRef(null);

  const handleShowInfo = () => setShowInfo(!showInfo);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${env.REACT_APP_WEATHER_API_KEY}&query=${country.name}`
      )
      .then((response) => {
        capital.current = response.data.location.name;
        temperature.current = response.data.current.temperature;
        weatherIcon.current = response.data.current.weather_icons;
        windSpeed.current = response.data.current.wind_speed;
        windDir.current = response.data.current.wind_dir;
      });
  }, [showInfo]);
  return (
    <div key={country.alpha2code}>
      <h2>{country.name}</h2>
      <button
        style={{ marginBlock: "auto" }}
        onClick={(e) => {
          e.preventDefault();
          handleShowInfo();
        }}
      >
        {showInfo ? "Hide" : "Show"}
      </button>
      {showInfo ? (
        <>
          <p>
            <strong>Capital</strong> {country.capital}
          </p>
          <p>
            <strong>Population</strong> {country.population}
          </p>
          <h3>
            <strong>Languages:</strong>
          </h3>
          <>
            {country.languages.map((lang) => {
              console.log(lang)
              return <li key={lang.name}>{lang.name}</li>;
            })}
          </>
          <img
            style={{ width: "200px" }}
            src={country.flag}
            alt={`${country.name} flag`}
          />

          <Weather
            capital={capital}
            temperature={temperature}
            weatherIcon={weatherIcon}
            windSpeed={windSpeed}
            windDir={windDir}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
};
