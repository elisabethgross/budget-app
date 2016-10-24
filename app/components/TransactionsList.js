import React, { Component } from 'react';

export default class TransactionList extends Component {

  componentDidMount() {
    this.props.fetchDaTransactions();
  }

  render() {
    const { transactions } = this.props;
    return (
      <div>
        <ul>
          {transactions && transactions.map(transaction => (
            <li><span>name: {transaction.name}, </span><span>amount: ${transaction.amount}</span></li>
          ))}
        </ul>
      </div>
    );
  }
}
