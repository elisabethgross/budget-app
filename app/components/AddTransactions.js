import React, { Component } from 'react';



export default class AddTransaction extends Component {

  constructor() {
    super();
    this.state = {
      transactionName: '',
      transactionAmount: ''
    };
  }


  render() {
    const { addDaTransaction } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addDaTransaction({
            name: this.state.transactionName,
            amount: this.state.transactionAmount
          });
          this.refs.form.reset();
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
          placeholder="name"
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
        <button type="submit">Add Transaction</button>
      </form>
    );
  }
}