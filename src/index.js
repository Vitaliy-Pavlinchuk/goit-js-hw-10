import { fetchCountries } from './js/fetchCountries';
import { renderCountries } from './js/renderCountries';
import { cleanupRender } from './js/cleanupRender';
import { refs } from './js/refs';

import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;

refs.inputSearch.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput(e) {
  const name = e.target.value.trim();

  if (!name) {
    cleanupRender();
    return;
  }

  fetchCountries(name)
    .then(renderCountries)
    .catch(() => Notify.failure('Oops, there is no country with that name'));
}
