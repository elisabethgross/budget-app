import React, { Component } from 'react';
import Total from './Total';

export default class TransactionList extends Component {

  constructor() {
    super();
    this.calculateTotal = this.calculateTotal.bind(this);
  }

  componentDidMount() {
    this.props.fetchDaTransactions();
  }

  calculateTotal() {
    let sum = 0;
    this.props.transactions.forEach(transaction => {
      // console.log(transaction.amount);
      sum += Number(transaction.amount);
    });
    return sum;
  }

  // <li key={idx}><span>name: {transaction.name}, </span><span>amount: ${transaction.amount}, </span><span>category: {transaction.category.name}</span></li>

  render() {
    return (
      <div>
        <ul>
          {console.log('this.props.transactions', this.props.transactions)}
          {this.props.transactions && this.props.transactions.map((transaction, idx) => {
            return transaction ? <li key={idx}>name: {transaction.name}, amount: ${transaction.amount}, category: {transaction.category.name}</li> : null;
          })}
        </ul>
        <Total total={this.calculateTotal()} />
      </div>
    );
  }
}
