import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import { connectRouter } from 'connected-react-router'
import { loginEpic } from './modules/authentication/epics/login'
import { loginReducers as login} from './modules/authentication/reducers/login'
import { authReducers as auth} from './modules/authentication/reducers/auth'

export const rootEpic = combineEpics(loginEpic)

export const createRootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  login,
  auth
})
