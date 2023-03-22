import Notiflix from 'notiflix';

export function notifyOverflowMatches() {
  Notiflix.Notify.info(
    'Too many matches found. Please enter a more specific name.'
  );
}

export function notifyOnError() {
  console.error('Error fetching data');
  Notiflix.Notify.failure('Something went wrong, please try again later.');
}

export function notifyNoCountryFound() {
  Notiflix.Notify.failure('Oops, there is no country with that name');
}
