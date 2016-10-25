import { RECEIVE_TOTAL } from '../actions/total';

const initialTotal = 0;

export default function transactions (state = initialTotal, action) {
  switch(action.type) {
    case RECEIVE_TOTAL: return action.total;
    default: return state;
  }
}
