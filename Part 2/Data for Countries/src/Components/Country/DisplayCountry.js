import { CountryData } from "./CountryData";

export const DisplayCountry = ({ countryList }) => {
  return (
    <div>
      {countryList.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : (
        countryList.map((element) => (
          <div>
            {countryList.length < 10 ? (
              <CountryData country={element} key={element.name} />
            ) : (
              countryList.length(
                <CountryData country={element} key={element.name} />
              )
            )}
          </div>
        ))
      )}
    </div>
  );
};
