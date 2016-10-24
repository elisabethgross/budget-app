import React from 'react';

export default ({ transactions, fetchDaTransactions}) => (
  <div>
    <button onClick={fetchDaTransactions}>Get the transactions</button>
    <ul>
      {transactions && transactions.map(transaction => (
        <li><span>name: {transaction.name} </span><span>amount: {transaction.amount}</span></li>
      ))}
    </ul>
  </div>
);
