import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { stateProvider } from '../providers/state.provider'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const persistedState = stateProvider.loadState()

export const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(
    applyMiddleware(
      thunk
    )
  )
)

store.subscribe(() => {
  stateProvider.saveState(store.getState())
})
