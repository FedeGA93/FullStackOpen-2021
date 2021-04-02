export const CountryName = ({ handleCountryName }) => {
  return (
    <div>
     Country: <input  onChange={handleCountryName} />
    </div>
  );
};
