import React, { Component } from 'react';

export default class CreateCategory extends Component {

  constructor() {
    super();
    this.state = {
      categoryName: ''
    };
  }

  render() {
    return (
      <div>
        <input
          ref="category"
          type="text"
          value={this.state.categoryName}
          onChange={(e) => {
            const newName = e.target.value;
            this.setState({
              categoryName: newName
            });
          }}
          placeholder="Category Name"
        />
        <button
          onClick={() => {
            this.props.addDaCategory({
              name: this.state.categoryName
            });
            this.refs.category.value = this.refs.category.defaultValue;
          }}>Add Category</button>
      </div>
    );
  }
}

