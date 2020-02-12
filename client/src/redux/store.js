import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { loadState, saveState } from '../services/state.service'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistedState = loadState()

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
  saveState(store.getState())
})
