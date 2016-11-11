import { connect } from 'react-redux';
import TransactionsList from '../components/TransactionsList';
import { fetchTransactions } from '../actions/transactions';
import { fetchCategories } from '../actions/categories';

const mapStateToProps = function (state) {
  return {
    transactions: state.transactions,
    categories: state.categories
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchDaTransactions: () => dispatch(fetchTransactions()),
    fetchDaCategories: () => dispatch(fetchCategories())
  };
};

const TransactionsListContainer = connect(mapStateToProps, mapDispatchToProps)(TransactionsList);

export default TransactionsListContainer;
