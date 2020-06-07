import { 
    APP_DATA_LOADING_TRUE,
    APP_DATA_LOADING_FALSE,
} from '../actions/constants';

const initialState = {
    isLoading: false
}

export const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
      case APP_DATA_LOADING_TRUE:
        return {
          ...state,
          isLoading: true 
        }
      case APP_DATA_LOADING_FALSE:
        return {
          ...state,
          isLoading: false
        }
      default:
        return state
    }
  }