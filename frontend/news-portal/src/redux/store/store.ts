import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import { userReducer } from '../reducers/userReducer';
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware=createSagaMiddleware();
const store=createStore(userReducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
export default store