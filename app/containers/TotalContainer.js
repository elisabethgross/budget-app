import { connect } from 'react-redux';
import Total from '../components/Total';
import { getTotal } from '../actions/total';

const mapStateToProps = function (state) {
  return {
    total: state.total
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    getDaTotal: () => dispatch(getTotal())
  };
};

const TotalContainer = connect(mapStateToProps, mapDispatchToProps)(Total);

export default TotalContainer;

