import * as types from '../actions/actionTypes';
import InitialState from './initialState';

export default function userBabyReducer(state = InitialState.measures, action) {
  switch (action.type) {
    case types.LOAD_MEASURES_SUCCESS:
      return action.measures;
    case types.ADD_MEASURE_SUCCESS:
      return [...state, Object.assign({}, action.measure)];
    default:
      return state;
  }
}
