import axios from 'axios';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORY_TRANSACTIONS = 'RECEIVE_CATEGORY_TRANSACTIONS';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

export const receiveCategoryTransactions = categoryTransactions => ({
  type: RECEIVE_CATEGORY_TRANSACTIONS,
  categoryTransactions
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
    }).then(res => {
      let category = res.data;
      dispatch(receiveCategory(category));
    });

export const fetchCategoryTransactions = category =>
  dispatch =>
    fetch(`/api/categories/alltransactions/${category.id}`)
    .then(res => res.json())
    .then(categoryTransactions => {
      dispatch(receiveCategoryTransactions(categoryTransactions));
    });
