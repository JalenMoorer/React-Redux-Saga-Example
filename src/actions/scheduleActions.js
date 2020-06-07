import { 
    FETCH_SCHEDULE,
    FETCH_SCHEDULE_ERROR,
    FETCH_SCHEDULE_SUCCESS
} from './constants';

export const fetchScheduleSuccess = (data) => {
    return {
        type: FETCH_SCHEDULE_SUCCESS,
        payload: data
    };
}

export const fetchSchedule = () => {
    return {
        type: FETCH_SCHEDULE
    }
}

export const fetchScheduleError = (data) => {
    return {
        type: FETCH_SCHEDULE_ERROR,
        payload: data
    }
}