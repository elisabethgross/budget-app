import axios from 'axios';

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});

export const receiveTransaction = transaction => ({
  type: RECEIVE_TRANSACTION,
  transaction
});

export const fetchTransactions = () =>
  dispatch =>
    fetch('/api/transactions')
    .then(res => res.json())
    .then(transactions => {
      dispatch(receiveTransactions(transactions));
    });

export const addTransaction = transaction =>
  dispatch =>
    axios.post('/api/transactions', {
      name: transaction.name,
      amount: transaction.amount,
      category: transaction.category
    }).then(res => {
      let transaction = res.data;
      console.log('transaction', transaction);
      dispatch(receiveTransaction(transaction));
    });

