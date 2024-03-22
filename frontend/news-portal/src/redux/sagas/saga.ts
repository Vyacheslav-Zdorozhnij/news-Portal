import { takeLatest, call, put } from "redux-saga/effects";
// import { registerUserSuccess, registerUserFailure } from "../actions/action";

function* registerUser(action: { payload: unknown; }) {
  try {
    const response = yield call(fetch, "http://localhost:4001/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
    });
    if (!response.ok) {
      throw new Error("Failed to register user");
    }
    // yield put(registerUserSuccess());
  } catch (error) {
    // yield put(registerUserFailure(error.message));
  }
}

export function* watchRegisterUser(){
    yield takeLatest('REGISTER_USER_REQUEST',registerUser)
}