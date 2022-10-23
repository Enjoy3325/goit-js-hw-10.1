import { fetchCountries } from './js/fetchCountries';
import { onMarkupOneCountry, onMurkupListCountry } from './js/markup';
import { refs } from './js/refs';

import { Notiflix } from 'notiflix';
import debounce from 'lodash.debounce';
import './css/styles.css';

const DEBOUNCE_DELAY = 300;
refs.inputNameCountry.addEventListener(
  'input',
  debounce(onCreateCountry, DEBOUNCE_DELAY)
);

function onCreateCountry(event) {
  let name = event.target.value.trim();
  console.log(name);

  if (name) {
    console.log(fetchCountries(name));
    fetchCountries(name)
      .then(country => {
        if (country.length > 10) {
          console.log(123);
          return Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (country.length >= 2 && country.length <= 10) {
          onMurkupListCountry(country);
        } else if (country.length === 1) {
          onMarkupOneCountry(country);
          return;
        }
      })
      .catch(error => {
        return Notiflix.Notify.failure(
          'Oops, there is no country with that name'
        );
      });
  }
  refs.infoCountry.innerHTML = '';
  refs.countryList.innerHTML = '';
}

// .then(data => {
//   console.log('---> data', data);

//   console.log(onMarkupOneCountry);
//   console.log(onMurkupListCountry);
// });
