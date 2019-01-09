import * as actionTypes from '../actions/actiontypes';

const initialState = {
    results: []
}


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.STORE_RESULT:
            const newResult = {
                id: new Date(),
                value: action.counter
            }
            let newResults = [...state.results];
            newResults.push(newResult);

            return {
                ...state,
                results: newResults
            }

        case actionTypes.REMOVE_RESULT:

            const id = action.resultId;
            newResults = state.results.filter(ele => ele.id !== id);

            return {
                ...state,
                results: newResults
            }
    }
    return state;
}

export default reducer;

