import {
    OPEN_MODAL,
    CLOSE_MODAL,
    LOADING_MODAL
} from '../actions/types'

const initalState = {
    modals: [],
    loading: null
};

const modalsReducer = (state = initalState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modals: [...state.modals, action.payload]
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modals: state.modals.filter(m => m !== action.payload)
            }
        case LOADING_MODAL:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default modalsReducer;
