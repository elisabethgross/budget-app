import React, { Component } from 'react';

export default class Total extends Component {

  componentDidMount() {
    this.props.getDaTotal();
  }

  render() {
    return (
      <div>
        <h3>TOTAL: <span>${this.props.total}</span></h3>
      </div>
    );
  }
}
