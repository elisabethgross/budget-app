export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';

export const receiveTransactions = transactions => ({
  type: RECEIVE_TRANSACTIONS,
  transactions
});

export const fetchTransactions = () =>
  dispatch =>
    fetch('/api/transactions')
    .then(res => res.json())
    .then(transactions => {
      dispatch(receiveTransactions(transactions));
    });


