
import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'
import rootSaga from './reducers/rootSaga'
import { DataState } from './reducers/data/types'

export interface ApplicationState {
  data: DataState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)
export default store