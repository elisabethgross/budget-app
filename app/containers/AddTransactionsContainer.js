import { connect } from 'react-redux';
import AddTransactions from '../components/AddTransactions';
import { addTransaction } from '../actions/transactions';
import { fetchCategories } from '../actions/categories';

const mapStateToProps = function (state) {
  return {
    transaction: state.transaction,
    categories: state.categories
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    addDaTransaction: transaction => {
      dispatch(addTransaction(transaction));
    },
    fetchDaCategories: () => dispatch(fetchCategories())
  };
};

const AddTransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(AddTransactions);

export default AddTransactionsContainer;
