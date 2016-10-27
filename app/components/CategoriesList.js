import React, { Component } from 'react';

export default class CategoriesList extends Component {

  componentDidMount() {
    this.props.fetchDaCategories();
  }

  render() {
    return (
      <div>
        <select>
          {this.props.categories && this.props.categories.map((category, idx) => (
            <option key={idx}>{category.name}</option>
          ))}
        </select>
      </div>
    );
  }
}
