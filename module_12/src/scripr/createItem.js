import itemTemplate from '../templates/countryItem.hbs';
export { createItem as default };

const createItem = array => {
  return itemTemplate(array[0]);
};
