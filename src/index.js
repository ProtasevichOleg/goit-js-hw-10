// index.js

import './css/styles.css';
import { fetchCountries } from './api/fetchCountries';
import debounce from 'lodash.debounce';
import {
  clearResults,
  onCountriesFetched,
} from './utils/countrySearchHandlers';
import {
  notifyOnError,
  notifyNoCountryFound,
} from './utils/notificationHelpers';

const bodyEl = document.querySelector('body');
bodyEl.classList.add('body');
const searchBoxEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');
const countryInfoEl = document.querySelector('.country-info');

searchBoxEl.addEventListener('input', debounce(onSearchInput, 500));

function onSearchInput(event) {
  const searchQuery = event.target.value.trim();
  clearResults(countryListEl, countryInfoEl);

  if (!searchQuery) {
    return;
  }

  fetchCountries(searchQuery)
    .then(countries => {
      if (countries) {
        onCountriesFetched(countries, countryListEl, countryInfoEl);
      } else {
        notifyOnError();
      }
    })
    .catch(error => {
      if (error === 'Oops, there is no country with that name') {
        notifyNoCountryFound();
      } else {
        notifyOnError();
      }
    });
}
