import * as types from "./types"

export function signInUser(email, password) {
    return {
        type: types.SIGN_IN_REQUEST,
        payload: {
            email,
            password
        }
    }
}