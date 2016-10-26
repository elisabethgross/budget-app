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

  render() {
    return (
      <div>
        <ul>
          {this.props.transactions && this.props.transactions.map((transaction, idx) => (
            <li key={idx}><span>name: {transaction.name}, </span><span>amount: ${transaction.amount}</span></li>
          ))}
        </ul>
        <Total total={this.calculateTotal()}/>
      </div>
    );
  }
}
