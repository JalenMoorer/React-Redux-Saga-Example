import { combineReducers } from 'redux';

import { loadingReducer } from './loadingReducer';
import { burgersReducer } from './burgersReducer';
import { scheduleReducer } from './scheduleReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
    loading: loadingReducer,
    burgers: burgersReducer,
    schedule: scheduleReducer,
    users: usersReducer,
});

export default rootReducer;