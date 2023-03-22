// ./utils/countrySearchHandlers.js

import { notifyOverflowMatches } from './notificationHelpers';
import { renderCountryList, renderCountryInfo } from './renderHelpers';

export function clearResults(countryList, countryInfo) {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

export function onCountriesFetched(countries, countryList, countryInfo) {
  if (countries.length > 10) {
    notifyOverflowMatches();
  } else if (countries.length > 1) {
    renderCountryList(countries, countryList);
  } else if (countries.length === 1) {
    renderCountryInfo(countries[0], countryInfo);
  }
}
