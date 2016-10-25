export const RECEIVE_TOTAL = 'RECEIVE_TOTAL';

export const receiveTotal = (total) => ({
  type: RECEIVE_TOTAL,
  total
});


export const getTotal = () =>
  dispatch =>
    fetch('/api/transactions/total')
    .then(res => res.json())
    .then(total => {
      console.log('total', total);
      dispatch(receiveTotal(total));
    });
