export { getCountryByName as default };

const getCountryByName = nameCountry => {
  return fetch(`https://restcountries.eu/rest/v2/name/${nameCountry}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
};
