import { 
    APP_DATA_LOADING_TRUE,
    APP_DATA_LOADING_FALSE,
} from './constants';

export const appLoadTrue = () => {
    return {
        type: APP_DATA_LOADING_TRUE,
    };
}

export const appLoadFalse = () => {
    return {
        type: APP_DATA_LOADING_FALSE
    }
}