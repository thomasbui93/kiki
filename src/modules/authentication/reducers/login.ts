import { ActionType } from './../../../types/redux'
import { requestingAuthentication, failedAuthentication, receivedAuthentication } from '../constants/login'

export type LoginState = {
  isLogin: boolean,
  isError: boolean,
  isRequesting: boolean,
  error: string
}

export const initialLoginState = {
  isLogin: false,
  isError: false,
  isRequesting: false,
  error: ''
}

export const loginReducers = (state = initialLoginState, {type, payload}: ActionType): LoginState => {
  switch (type) {
    case requestingAuthentication:
      return {
        ...state,
        isRequesting: true,
        isLogin: false,
        isError: false
      }
    case receivedAuthentication:
      return {
        ...state,
        isRequesting: false,
        isLogin: (payload as {isLogin: boolean}).isLogin,
        isError: false
      }
    case failedAuthentication:
      return {
        ...state,
        isRequesting: false,
        isLogin: false,
        isError: true,
        error: (payload as {error: string}).error
      }
    default:
      return state
  }
}
