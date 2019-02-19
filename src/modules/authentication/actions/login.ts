import { LoginCredential } from '../components/login/LoginComponent'
import { requestingAuthentication, receivedAuthentication, failedAuthentication } from '../constants/login'
import { ErrorData } from '../../../services/error/error-message'

export const requestAuthenticationAction = (credential: LoginCredential) => ({
  type: requestingAuthentication,
  payload: {
    credential
  }
})

export const receivedAuthenticationAction = (isLogin: boolean) => ({
  type: receivedAuthentication,
  payload: {
    isLogin
  }
})

export const failAuthenticationAction = (error: ErrorData) => ({
  type: failedAuthentication,
  payload: {
    isError: true,
    errorData: error
  }
})