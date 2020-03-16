import countries from "./tmpData";

export default countryId => {
  const result = countries.find(
    country =>
      country.id.toString().toLowerCase() === countryId.toString().toLowerCase()
  );
  return { country: result || {} };
};
