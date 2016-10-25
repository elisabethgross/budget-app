import { combineReducers } from 'redux';

import transactions from './transactions';
import total from './total';

const rootReducer = combineReducers({
  transactions,
  total
});

export default rootReducer;
