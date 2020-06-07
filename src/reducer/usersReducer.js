import { 
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
} from '../actions/constants';

const initialState = {
    data: null,
    isFetching: false,
    error: ''
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS:
        return {
          ...state,
          isFetching: true 
        }
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          data: action.payload,
          isFetching: false
        }
      case FETCH_USERS_ERROR:
          return {
            ...state,
            error: action.payload.message,
            isFetching: false 
          }
      default:
        return state
    }
  }