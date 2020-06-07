import { 
    FETCH_USERS,
    FETCH_USERS_ERROR,
    FETCH_USERS_SUCCESS
} from './constants';

export const fetchUsersSuccess = (data) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: data
    };
}

export const fetchUsers = () => {
    return {
        type: FETCH_USERS
    }
}

export const fetchUsersError = (data) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: data
    }
}