import axios from 'axios';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const fetchCategories = () =>
  dispatch =>
    fetch('/api/categories')
    .then(res => res.json())
    .then(categories => {
      dispatch(receiveCategories(categories));
    });

export const addCategory = category =>
  dispatch =>
    axios.post('/api/categories', {
      name: category.name
    }).then(() => {
      dispatch(receiveCategory(category));
    });
