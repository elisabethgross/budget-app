import { RECEIVE_TRANSACTIONS, RECEIVE_TRANSACTION } from '../actions/transactions';

const initialTransactions = [];

export default function transactions (state = initialTransactions, action) {
  switch(action.type) {
    case RECEIVE_TRANSACTIONS: return action.transactions;
    case RECEIVE_TRANSACTION: return state.concat([action.transaction]);
    default: return state;
  }
}
