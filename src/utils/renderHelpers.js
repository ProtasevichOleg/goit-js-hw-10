import {
  countryListItemTemplate,
  countryInfoTemplate,
} from './countryTemplate';

export function renderCountryList(countries, countryList) {
  countries.forEach(country => {
    const listItem = countryListItemTemplate(country);
    countryList.insertAdjacentHTML('beforeend', listItem);
  });
}

export function renderCountryInfo(country, countryInfo) {
  const countryData = countryInfoTemplate(country);
  countryInfo.insertAdjacentHTML('beforeend', countryData);
}
