import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../actions/categories';

const initialCategories = [];

export default function categories (state= initialCategories, action) {
  switch(action.type) {
    case RECEIVE_CATEGORIES: return action.categories;
    case RECEIVE_CATEGORY: return state.concat([action.category]);
    default: return state;
  }
}