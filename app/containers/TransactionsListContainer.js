import { connect } from 'react-redux';
import TransactionsList from '../components/TransactionsList';
import { fetchTransactions } from '../actions/transactions';

const mapStateToProps = function (state) {
  return {
    transactions: state.transactions
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    fetchDaTransactions: () => dispatch(fetchTransactions())
  };
};

const AddTransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(TransactionsList);

export default AddTransactionsContainer;
