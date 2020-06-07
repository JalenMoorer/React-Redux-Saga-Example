import { 
    FETCH_SCHEDULE,
    FETCH_SCHEDULE_SUCCESS,
    FETCH_SCHEDULE_ERROR,
} from '../actions/constants';

const initialState = {
    data: null,
    isFetching: false,
    error: ''
}

export const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SCHEDULE:
        return {
          ...state,
          isFetching: true 
        }
      case FETCH_SCHEDULE_SUCCESS:
        return {
          ...state,
          data: action.payload,
          isFetching: false
        }
      case FETCH_SCHEDULE_ERROR:
          return {
            ...state,
            error: action.payload.message,
            isFetching: false 
          }
      default:
        return state
    }
  }