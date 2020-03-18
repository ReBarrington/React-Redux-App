import { GET_DATA } from '../actions';

const initialState = {
    kitties: [],
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
    }
}