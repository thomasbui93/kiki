import { loginReducers, initialLoginState } from './login'
import { requestingAuthentication, receivedAuthentication, failedAuthentication } from '../constants/login'

describe('loginReducers', () => {
  it('default state', () => {
    expect(loginReducers(undefined, {
      type: 'asdad',
      payload: {}
    })).toEqual(initialLoginState)
  })
  it('should render default state if unchecked type', () => {
    expect(loginReducers(initialLoginState, {
      type: 'asdad',
      payload: {}
    })).toEqual(initialLoginState)
  })
  it('requestingAuthentication case', () => {
    expect(loginReducers(initialLoginState, {
      type: requestingAuthentication,
      payload: {}
    })).toEqual({
      isRequesting: true,
      isLogin: false,
      isError: false,
      error: ''
    })
  })
  it('receivedAuthentication case', () => {
    expect(loginReducers(initialLoginState, {
      type: receivedAuthentication,
      payload: {
        isLogin: false
      }
    })).toEqual({
      isRequesting: false,
      isLogin: false,
      isError: false,
      error: ''
    })
  })
  it('failedAuthentication case', () => {
    expect(loginReducers(initialLoginState, {
      type: failedAuthentication,
      payload: {
        error: 'error text'
      }
    })).toEqual({
      isRequesting: false,
      isLogin: false,
      isError: true,
      error: 'error text'
    })
  })
})
