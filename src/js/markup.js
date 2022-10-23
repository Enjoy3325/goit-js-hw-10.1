import { refs } from './refs';

export function onMarkupOneCountry(countryArr) {
  console.log('---> log data', countryArr);
  const markupOneCountry = countryArr.map(country => {
    console.log('---> country 1', country);
    `<div class="country-info__box"><img class="country-info__image" src=${
      country.flags.svg
    } alt=${country.name.official}, weight ="140"/>
    <h2  class="country-info__name-country" ${country.name.official}></h2></div>
      <p  class="country-info__>
     <span class ="country-info__performance">Capital:</span>${
       country.capital
     }</p>
     <p  class="country-info__><span class ="country-info__performance">Population:</span>${
       country.population
     }</p>

     <p  class="country-info__><span class ="country-info__performance">languages:</span>${Object.values(
       country.languages
     ).join(', ')}</p>`;
  });
  console.log(markupOneCountry);
  refs.infoCountry.insertAdjacentHTML('afterbegin', markupOneCountry);
}
export function onMurkupListCountry(countryArr) {
  console.log('---> log data', countryArr);
  const markupListCountry = countryArr.map(country => {
    console.log('----> country', country);
    return `<li class="country-list__item">
    <img class="country-list__flags" src="${country.flags.svg}" alt="${country.name.official}" width="45" />
    <h2 class="country-list__name">${country.name.official}</h2>
  </li>
  `;
  });

  refs.countryList.insertAdjacentHTML('afterbegin', markupListCountry);
  console.log(markupListCountry);
}
// <p  class="country-info__><span class ="country-info__performance">Currency:</span>${country.currencies.name}</p>
//  <p  class="country-info__><span class ="country-info__performance">Currency symbol:</span>${country.currencies.symbol}</p>
// <p  class="country-info__><span class ="country-info__performance">Car code:</span>${country.car.signs}</p>
// <p  class="country-info__><span class ="country-info__performance">Google map of the country:</span>${country.maps.googleMaps}</p>`;
