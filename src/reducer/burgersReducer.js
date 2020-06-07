import { 
    FETCH_BURGERS,
    FETCH_BURGERS_SUCCESS,
    FETCH_BURGERS_ERROR,
} from '../actions/constants';

const initialState = {
    data: null,
    isFetching: false,
    error: ''
}

export const burgersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BURGERS:
        return {
          ...state,
          isFetching: true 
        }
      case FETCH_BURGERS_SUCCESS:
        return {
          ...state,
          data: action.payload,
          isFetching: false
        }
      case FETCH_BURGERS_ERROR:
        console.log(action);
          return {
            ...state,
            error: action.payload.message,
            isFetching: false 
          }
      default:
        return state
    }
  }