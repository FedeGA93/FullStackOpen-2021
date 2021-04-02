export const Weather = ({ capital, temperature, weatherIcon, windSpeed, windDir }) => {
  return (
    <div>
      <h2>Wheater in {capital.current}</h2>
      <p>
        <strong>Temperature: </strong>
        {temperature.current}
      </p>
      <img src={weatherIcon.current[0]} alt="Weather icon" />
      <p>
        <strong>Wind: </strong>
        {windSpeed.current} MPH  direction: {windDir.current}
      </p>
    </div>
  );
};
