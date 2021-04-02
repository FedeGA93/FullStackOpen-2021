import React, { useState, useEffect } from "react";
import axios from "axios";

import { CountryName } from "./Components/Country/CountryName";
import { DisplayCountry } from "./Components/Country/DisplayCountry";

const App = () => {
  const [countryName, setCountryName] = useState("");
  const [countryList, setCountryList] = useState([]);
  const handleCountryName = (e) => {
    setCountryName(e.target.value);
  };

  useEffect(() => {
    if (countryName.length > 0) {
      axios
        .get(`https://restcountries.eu/rest/v2/name/${countryName}`)
        .then((response) => {
          setCountryList(response.data);
        });
    }
  }, [countryName]);
  return (
    <div>
      <CountryName handleCountryName={handleCountryName} />

      <DisplayCountry
        countryList={countryList}
      />
    </div>
  );
};
export default App;
