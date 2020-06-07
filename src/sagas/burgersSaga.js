import { put, call} from 'redux-saga/effects'
import { BURGERS_ENDPOINT } from './constants';
import { getResponseFromEndpoint } from '../helpers/getResponseFromEndpoint';
import {
    fetchBurgersSuccess,
    fetchBurgersError,
    fetchBurgers,
  } from '../actions/burgerActions';

function* onFetchingApi() {
  yield put(fetchBurgers());
}

function* getBurgersFromAPI() {
    try {
        // call the api
        const data = yield call(getResponseFromEndpoint, BURGERS_ENDPOINT);
        // call the success action with data
        yield put(fetchBurgersSuccess(data));
      } catch (e) {
        // call the error action with data
        yield put(fetchBurgersError(e));
      }
}

export default function* invokeBurgerSaga() {
    yield call(onFetchingApi);
    yield call(getBurgersFromAPI);
}