import { combineReducers } from 'redux';

import transactions from './transactions';
import { categories, categoryTransactions} from './categories';

const rootReducer = combineReducers({
  transactions,
  categories,
  categoryTransactions
});

export default rootReducer;
