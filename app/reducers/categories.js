import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY, RECEIVE_CATEGORY_TRANSACTIONS } from '../actions/categories';

const initialCategories = [];
const initialCategoryTransactions = [];

export function categories (state= initialCategories, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES: return action.categories;
    case RECEIVE_CATEGORY: return state.concat([action.category]);
    default: return state;
  }
}

export function categoryTransactions (state=initialCategoryTransactions, action) {
  switch(action.type) {
    case RECEIVE_CATEGORY_TRANSACTIONS: return action.categoryTransactions;
    default: return state;
  }
}