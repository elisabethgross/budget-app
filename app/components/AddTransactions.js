import React, { Component } from 'react';

export default class AddTransaction extends Component {

  constructor(props) {
    super(props);
    this.state = {
      transactionName: '',
      transactionAmount: '',
      transactionCategory: ''
    };
  }

  componentDidMount() {
    this.props.fetchDaCategories();
  }

  componentWillReceiveProps(nextProps) {
    var defaultCategory = nextProps.categories[0];
    this.setState({
      transactionCategory: defaultCategory
    });
  }

  render() {
    const self = this;
    const { addDaTransaction } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addDaTransaction({
            name: this.state.transactionName,
            amount: this.state.transactionAmount,
            category: this.state.transactionCategory
          });
          this.refs.form.reset();
          this.setState({
            transactionName: '',
            transactionAmount: ''
          });
          return false;
        } }
        ref="form"
        >
        <h4>Add a transaction</h4><br />
        <input
          value={this.state.transactionName}
          onChange={(e) => {
            const newName = e.target.value;
            this.setState({
              transactionName: newName
            });
          } }
          placeholder="Transaction Name"
          type="text"
          /><br />
        $<input
          value={this.state.transactionAmount}
          onChange={(e) => {
            const newAmount = e.target.value;
            this.setState({
              transactionAmount: newAmount
            });
          } }
          type="text"
          placeholder="amount"
          /><br />
          <select
            value={this.state.transactionCategory.name}
            onChange={(e) => {
              const newCategoryname = e.target.value;
              const newCategory = this.props.categories.filter(elem => elem.name === newCategoryname);
              this.setState({
                transactionCategory: newCategory[0]
              });
            } }
            >
            {this.props.categories && this.props.categories.map((category, idx) => (
              <option
                key={idx}
                value={category.name}
                >{category.name}</option>
            ))}
          </select>
        <button type="submit">Add Transaction</button>
      </form>
    );
  }
}