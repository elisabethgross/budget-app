import { connect } from 'react-redux';
import CreateCategory from '../components/CreateCategory';
import { addCategory } from '../actions/categories';

const mapStateToProps = function (state) {
  return {
    category: state.category
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    addDaCategory: category => {
      dispatch(addCategory(category));
    }
  };
};

const CreateCategoryContainer = connect(mapStateToProps, mapDispatchToProps)(CreateCategory);

export default CreateCategoryContainer;
