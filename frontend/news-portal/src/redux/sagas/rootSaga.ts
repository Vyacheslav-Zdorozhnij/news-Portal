import { all } from 'redux-saga/effects';
import { watchLoginUser, watchRegisterUser } from './saga';

export default function* rootSaga(){
    yield all([
        watchRegisterUser(),
        watchLoginUser()
    ])
}