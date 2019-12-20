import listTemplate from '../templates/listTemplate.hbs';
export { createList as default };

const createList = array => {
  return array.map(country => listTemplate(country)).join(' ');
};
