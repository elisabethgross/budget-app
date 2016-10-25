import React, { Component } from 'react';

const formValidator = function (InnerComponent) {
  class OuterComponent extends Component {
    constructor() {
      super();
      this.state = {
        pristine: true,
        value: undefined,
        error: this.props.validateValue(undefined)
      };
    }

    onChange(e) {
      const newValue = e.target.value;
      this.setState({
        pristine: false,
        value: newValue,
        error: this.props.validateValue(newValue)
      });
    }
    onSubmit(e) {
      e.preventDefault();
      this.props.submitValue(this.state.value);
    }

    render() {
      return (
        <InnerComponent
          value={this.state.value}
          error={this.state.error}
          pristine={this.state.pristine}
          onSubmit={(e) => this.onSubmit(e)}
          onChange={(e) => this.onChange(e)}
        />
      );
    }
  }
  return OuterComponent;
};
