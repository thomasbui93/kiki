import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { connectRouter } from 'connected-react-router'

export const rootEpic = combineEpics()

export const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
})
