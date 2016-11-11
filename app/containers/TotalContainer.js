import { connect } from 'react-redux';
import Total from '../components/Total';
import { fetchCategories, fetchCategoryTransactions } from '../actions/categories';
import { fetchTransactions } from '../actions/transactions';

const mapStateToProps = function (state) {
  return {
    categoryTransactions: state.categoryTransactions,
    categories: state.categories,
    transactions: state.transactions
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchDaCategoryTransactions: category => dispatch(fetchCategoryTransactions(category)),
    fetchDaCategories: () => dispatch(fetchCategories()),
    fetchDaTransactions: () => dispatch(fetchTransactions())
  };
};

const TotalContainer = connect(mapStateToProps, mapDispatchToProps)(Total);

export default TotalContainer;
