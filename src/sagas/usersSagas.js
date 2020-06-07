import { put, call} from 'redux-saga/effects'
import { USERS_ENDPOINT } from './constants';
import { getResponseFromEndpoint } from '../helpers/getResponseFromEndpoint';
import {
    fetchUsersSuccess,
    fetchUsersError,
    fetchUsers,
  } from '../actions/userActions';

  function* onFetchingApi() {
    yield put(fetchUsers());
  }

function* getUsersFromAPI() {
    try {
        // call the api
        const data = yield call(getResponseFromEndpoint, USERS_ENDPOINT);
        // call the success action with data
        yield put(fetchUsersSuccess(data));
      } catch (e) {
        // call the error action with data
        yield put(fetchUsersError(e));
      }
}

export default function* invokeUsersSaga() {
    yield call(onFetchingApi)
    yield call(getUsersFromAPI);
}   