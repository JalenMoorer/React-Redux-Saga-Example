import { put, call, all} from 'redux-saga/effects';
import invokeBurgersSaga from './burgersSaga';
import invokeScheduleSaga from './scheduleSaga';
import invokeUsersSaga from './usersSagas';
import {
    appLoadTrue,
    appLoadFalse,
  } from '../actions/loadingActions';

function* onLoadingTrue() {
  yield put(appLoadTrue());
}

function* onLoadingFalse() {
  yield put(appLoadFalse());
}

// single entry point to start all Sagas at once

export default function* rootSaga() {
    yield all([
      onLoadingTrue(),
      invokeBurgersSaga(),
      invokeScheduleSaga(),
      invokeUsersSaga(),
    ])
    yield call(onLoadingFalse); // Make a loading false state after race-condition
}