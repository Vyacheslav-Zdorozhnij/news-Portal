import { all } from 'redux-saga/effects';
import { watchRegisterUser } from './saga';

export default function* rootSaga(){
    yield all([
        watchRegisterUser(),
    ])
}