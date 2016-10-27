import { connect } from 'react-redux';
import CategoriesList from '../components/CategoriesList';
import { fetchCategories } from '../actions/categories';

const mapStateToProps = function (state) {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchDaCategories: () => dispatch(fetchCategories())
  };
};

const CategoriesListContainer = connect(mapStateToProps, mapDispatchToProps)(CategoriesList);

export default CategoriesListContainer;

