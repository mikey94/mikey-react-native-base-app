
import createReducer from '../../lib/createReducer'
import * as types from "../actions/types"

const initialState = {
    isLoading: false,
    userId: null,
    error: false,
    errorMessage: "",
    token: null,
    email: null
}

export const LoginReducer = createReducer(initialState,{
    [types.SIGN_IN_REQUEST](state, action) {
        return {
            ...state,
            isLoading: true,
            error: false
        }
    },
    [types.SIGN_IN_REQUEST_SUCCESS](state, action) {
        return {
            ...state,
            isLoading: false,
            error: false,
            userId: action.payload.data.user_id,
            token: action.payload.data.token,
            email: action.payload.email
        }
    },
    [types.SIGN_IN_REQUEST_FAILURE](state, action) {
        return {
            ...state,
            isLoading: false,
            error: true,
            errorMessage: action.payload
        }
    }
})