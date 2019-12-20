import './styles.css';
import getCountryFromApi from './scripr/fetchCountries';
import createList from './scripr/createList';
import createItem from './scripr/createItem';
import PNotify from 'pnotify/src/PNotify.html';
import PNotifyButtons from 'pnotify/src/PNotifyButtons.html';

const debounce = require('lodash.debounce');

const refs = {
  input: document.querySelector('#input'),
  output: document.querySelector('#output'),
};

refs.input.addEventListener('input', debounce(getCountry, 500));

function getCountry(event) {
  event.preventDefault()
  const countryName = event.target.value;

  getCountryFromApi(countryName)
    .then(data => {
      refs.output.textContent = ' ';
      if (data.length > 1 && data.length <= 10) {
        const markup = createList(data);
        refs.output.insertAdjacentHTML('beforeend', markup);
      } else if (data.length === 1) {
        const markup = createItem(data);
        console.log(data);
        refs.output.insertAdjacentHTML('beforeend', markup);
      } else if (data.length > 10) {
        alert('Too many matches found!!!!!.');
      }
      console.dir(data.length);
    })
    .catch(error => console.log(error));
}
