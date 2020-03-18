import { GET_DATA, UPDATE_DATA } from '../actions';

const initialState = {
    cats: [],
    isFetchingData: false,
    // isFetchingData happens when 'get kitties' button is clicked.
};

export const catReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true
            }
        case UPDATE_DATA:
            return {
                ...state,
                cats: action.payload,
                isFetchingData: false
            }
        default: 
            return {
                ...state
            }
    }
}