import {call, takeEvery } from "redux-saga/effects";
import {REGISTER_USER_REQUEST,LOGIN_USER} from '../actions/action'

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
  } catch (error) {
    throw new Error("Failed to register user",error);
  }
}

function* loginUser(action:{  payload: { email: string; password: string }  }){

  console.log('action >>',action);
  try{
      const response=yield call(fetch,"http://localhost:4001/user/login11", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload),
      });
      if (!response.ok) {
        throw new Error("Failed to register user");
      }
  }catch(error){
    throw new Error("Failed to register user",error);
  }
}

export function* watchRegisterUser(){
yield takeEvery(REGISTER_USER_REQUEST,registerUser)
}

export function* watchLoginUser() {
yield takeEvery(LOGIN_USER, loginUser);
}