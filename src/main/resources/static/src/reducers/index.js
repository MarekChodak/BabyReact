import {combineReducers} from 'redux';
import userBaby from './userBabyReducer';
import measures from './measuresReducer';

const rootReducer = combineReducers({
  userBaby,
  measures
});

export default rootReducer;
