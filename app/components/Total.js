import React, { Component } from 'react';

export default class Total extends Component {

  componentDidMount() {
    this.props.fetchDaCategories();
    this.props.fetchDaTransactions();
  }

  getCategoryTransactionsTotal(category) {
    let sum = 0;
    const categoryTransactions = this.props.transactions.filter(transaction => transaction.categoryId === category.id);
    categoryTransactions.forEach(categoryTransaction => {
      sum += Number(categoryTransaction.amount);
    });
    return sum;
  }

  calculateTotal() {
    let sum = 0;
    this.props.transactions.forEach(transaction => {
      sum += Number(transaction.amount);
    });
    return sum;
  }

  render() {
    return (
      <div>
        <h3>TOTAL: ${this.calculateTotal()}</h3>
        {this.props.categories && this.props.categories.map((category, idx) =>
          <div key={idx}>
            <h3>{category.name} total: ${this.getCategoryTransactionsTotal(category)}</h3>
          </div>)}
      </div>
    );
  }
}
