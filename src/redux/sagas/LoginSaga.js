import { put, call, select, take } from "redux-saga/effects"
import * as types from "../actions/types"
import NavigationService from "../../../navigation/NavigationService"
import { NavigationActions } from "react-navigation"
import { signIn } from "../../api/methods/signIn"

export function* signInUser(action) {
    var response = {}
    try {
        response = yield call(signIn, action.payload)
        if (response.status === "SUCCEEDED") {
            yield put({ type: types.SIGN_IN_REQUEST_SUCCESS, payload: { ...response, email: action.payload.email }})
            NavigationService.navigateWithRest("RouteName")
        }
        else {
            yield put({ type: types.SIGN_IN_REQUEST_FAILURE, payload: response.msg })
            NavigationService.navigate("RouteName")
        }
    }
    catch(error) {
        console.log("error", error)
        yield put({ type: types.SIGN_IN_REQUEST_FAILURE, payload: error })
    }
}