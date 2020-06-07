import { 
    FETCH_BURGERS,
    FETCH_BURGERS_ERROR,
    FETCH_BURGERS_SUCCESS
} from './constants';

export const fetchBurgersSuccess = (data) => {
    return {
        type: FETCH_BURGERS_SUCCESS,
        payload: data
    };
}

export const fetchBurgers = () => {
    return {
        type: FETCH_BURGERS
    }
}

export const fetchBurgersError = (data) => {
    return {
        type: FETCH_BURGERS_ERROR,
        payload: data
    }
}