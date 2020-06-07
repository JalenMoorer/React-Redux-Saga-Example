import { put, call} from 'redux-saga/effects'
import { SCHEDULE_ENDPOINT } from './constants';
import { getResponseFromEndpoint } from '../helpers/getResponseFromEndpoint';
import formatScheduleData from '../helpers/formatScheduleData';
import {
    fetchScheduleSuccess,
    fetchScheduleError,
    fetchSchedule,
  } from '../actions/scheduleActions';

  function* onFetchingApi() {
    yield put(fetchSchedule());
  }

function* getScheduleFromAPI() {
    try {
        // call the api
        const data = yield call(getResponseFromEndpoint, SCHEDULE_ENDPOINT);

        data.forEach(item => item.workDays = formatScheduleData(item.workDays))
        // call the success action with data
        yield put(fetchScheduleSuccess(data));
      } catch (e) {
        // call the error action with data
        yield put(fetchScheduleError(e));
      }
}

export default function* invokeScheduleSaga() {
    yield call(onFetchingApi);
    yield call(getScheduleFromAPI);
}