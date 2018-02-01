import * as types from './actionTypes';
import UserBabyApi from '../api/userBabyApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadUserBabySuccess(baby) {
  return {type: types.LOAD_USER_BABY_SUCCESS  , baby: baby };
}

export function babyAddSuccess() {
  return {type: types.BABY_ADDED_SUCCESS};
}

export function loadUserBaby() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return UserBabyApi.loadUserBaby().then( baby => {
      dispatch(loadUserBabySuccess(baby.data));
    }).catch( error =>{
      throw(error);
    });
  };
}

export function addUserBaby(baby, photo) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return UserBabyApi.addUserBaby(baby, photo).then( () => {
      dispatch(babyAddSuccess());
    }).catch( error =>{
      throw(error);
    });
  };
}
