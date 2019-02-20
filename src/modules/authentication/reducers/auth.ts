import { ActionType } from './../../../types/redux'
import { saveLoginToken } from '../constants/login'

export type AuthState = {
  token: string
}

export const initialAuthState = {
  token: ''
}

export const authReducers =(state = initialAuthState, {type, payload}: ActionType): AuthState => {
  switch (type) {
    case saveLoginToken:
      return {
        ...state,
        token: (payload as AuthState).token
      }
    default:
      return state
  }
}
