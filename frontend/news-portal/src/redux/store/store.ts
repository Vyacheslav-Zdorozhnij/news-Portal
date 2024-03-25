import { applyMiddleware, compose, legacy_createStore as createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import { rootReducer } from './rootReducer';

const sagaMiddleware=createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)
sagaMiddleware.run(rootSaga)
export default store

// import { userReducer } from '../reducers/userReducer';
// import rootSaga from '../sagas/rootSaga';
// const sagaMiddleware=createSagaMiddleware();
// const store=createStore(userReducer,applyMiddleware(sagaMiddleware))
// sagaMiddleware.run(rootSaga)
// export default store