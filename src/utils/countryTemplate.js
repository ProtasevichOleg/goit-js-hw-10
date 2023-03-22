// ./utils/countryTemplate.js

export function countryListItemTemplate(country) {
  return `
    <li class="country-item">
      <img src="${country.flags.svg}" alt="Flag" width="50" />
      <span class="country-name">${country.name.common}</span>
    </li>
  `;
}

export function countryInfoTemplate(country) {
  const languages = Object.values(country.languages).join(', ');

  return `
    <div class="country-info__thumb country-item">
      <img src="${country.flags.svg}" alt="Flag" width="100" />
      <h2 class="country-name">${country.name.common}</h2>
    </div>
    <p class="country-info__label">Capital: <span class="country-info__text">${
      country.capital
    }</span></p>
    <p class="country-info__label">Population: <span class="country-info__text">${country.population.toLocaleString()}</span></p>
    <p class="country-info__label">Languages: <span class="country-info__text">${languages}</span></p>
  `;
}
