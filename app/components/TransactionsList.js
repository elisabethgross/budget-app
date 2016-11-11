import React, { Component } from 'react';
import TotalContainer from '../containers/TotalContainer';

export default class TransactionList extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchDaTransactions();
    this.props.fetchDaCategories();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.transactions && this.props.transactions.map((transaction, idx) => {
            return transaction ? <li key={idx}>name: {transaction.name}, amount: ${transaction.amount}, category: {transaction.category.name}</li> : null;
          })}
        </ul>
        <TotalContainer />
      </div>
    );
  }
}
