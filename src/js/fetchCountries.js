import { onMarkupOneCountry, onMurkupListCountry } from './markup.js';
export function fetchCountries(name) {
  console.log(name);
  const URL = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;
  fetch(URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
        console.log(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.log('---> data', data);
      if (data.length === 1) {
        onMarkupOneCountry(data);
      } else {
        onMurkupListCountry(data);
      }
      console.log(onMarkupOneCountry);
      console.log(onMurkupListCountry);
    });
}
