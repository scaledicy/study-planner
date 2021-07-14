import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { appReducer } from './appReducer'

const appStore = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export type AppStore = ReturnType<typeof appStore.getState>

export default appStore
