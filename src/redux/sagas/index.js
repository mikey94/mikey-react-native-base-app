import { takeEvery, all, take } from 'redux-saga/effects';
import { signInUser } from "./LoginSaga"
import * as types from "../actions/types"

export default function* watch(){
    yield all([
        takeEvery([types.SIGN_IN_REQUEST], signInUser)
    ]);
}