import { RECEIVE_TRANSACTIONS } from '../actions/transactions';

const initialTransactions = [];

export default function transactions (state = initialTransactions, action) {
  switch(action.type) {
    case RECEIVE_TRANSACTIONS: return action.transactions;
    default: return state;
  }
}
