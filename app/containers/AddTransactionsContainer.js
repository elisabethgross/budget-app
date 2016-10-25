import { connect } from 'react-redux';
import AddTransactions from '../components/AddTransactions';
import { addTransaction } from '../actions/transactions';

const mapStateToProps = function (state) {
  return {
    transaction: state.transaction
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    addDaTransaction: transaction => {
      dispatch(addTransaction(transaction));
    }
  };
};

const AddTransactionsContainer = connect(mapStateToProps, mapDispatchToProps)(AddTransactions);

export default AddTransactionsContainer;
