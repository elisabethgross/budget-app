import React from 'react';
import AddTransactionsContainer from '../containers/AddTransactionsContainer';
import TransactionsListContainer from '../containers/TransactionsListContainer';
import CreateCategoryContainer from '../containers/CreateCategoryContainer';

export default () => (
  <div>
    <AddTransactionsContainer />
    <TransactionsListContainer/>
    <CreateCategoryContainer/>
  </div>
    );