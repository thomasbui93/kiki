import { routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'
import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import {rootEpic, createRootReducer} from './reducers'
import { trackStoreChange } from './services/store/tracker'

export const history = createHistory()

export default () => {
  const initialState = {}
  const epicMiddleware = createEpicMiddleware()
  const enhancers: any = []
  const middleware = [
    epicMiddleware,
    routerMiddleware(history)
  ]

  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )

  const store: any = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers
  )
  store.subscribe(() => trackStoreChange(store))

  epicMiddleware.run(rootEpic)

  return store
}
