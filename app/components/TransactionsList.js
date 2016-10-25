import React, { Component } from 'react';

export default class TransactionList extends Component {

  componentDidMount() {
    this.props.fetchDaTransactions();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.transactions && this.props.transactions.map((transaction, idx) => (
            <li key={idx}><span>name: {transaction.name}, </span><span>amount: ${transaction.amount}</span></li>
          ))}
        </ul>
      </div>
    );
  }
}
