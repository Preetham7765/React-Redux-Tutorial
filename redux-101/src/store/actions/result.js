import * as actionTypes from './actiontypes';

const saveResult = (counter) => {
    return {
        type: actionTypes.STORE_RESULT,
        counter: counter
    };
}

export const storeResult = (counter) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(counter));
        }, 2000);
    }
}

export const removeResult = (id) => {
    return {
        type: actionTypes.REMOVE_RESULT,
        resultId: id
    }
}