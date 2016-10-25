import React from 'react';
import AddTransactionsContainer from '../containers/AddTransactionsContainer';
import TransactionsListContainer from '../containers/TransactionsListContainer';
import TotalContainer from '../containers/TotalContainer';

export default () => (
  <div>
    <AddTransactionsContainer />
    <TransactionsListContainer/>
    <TotalContainer/>
  </div>
    );