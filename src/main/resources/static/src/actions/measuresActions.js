import * as types from './actionTypes';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import MeasuresApi from "../api/measuresApi";

export function loadMeasuresSuccess(measures) {
  return {type: types.LOAD_MEASURES_SUCCESS  , measures: measures };
}

export function addMeasureSuccess(measure) {
  return {type: types.ADD_MEASURE_SUCCESS  , measure: measure };
}

export function loadBabyMeasures() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return MeasuresApi.loadBabyMeasures().then( measures => {
      dispatch(loadMeasuresSuccess(measures.data));
    }).catch( error =>{
      throw(error);
    });
  };
}

export function addBabyMeasure(measure) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return MeasuresApi.addMeasure(measure).then( () => {
      dispatch(addMeasureSuccess(measure));
    }).catch( error =>{
      throw(error);
    });
  };
}
