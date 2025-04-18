import {
    OPEN_MODAL,
    CLOSE_MODAL,
    LOADING_MODAL
} from './types'

export const openModal = (modalId) => (dispatch) => {
    dispatch({
        type: OPEN_MODAL,
        payload: modalId
    })
}

export const closeModal = (modalId) => (dispatch) => {
    dispatch({
        type: CLOSE_MODAL,
        payload: modalId
    })
}

export const loadingModal = (modalId) => (dispatch) => {
    dispatch({
        type: LOADING_MODAL,
        payload: modalId
    })
}