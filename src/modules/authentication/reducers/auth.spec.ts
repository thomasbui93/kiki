import { authReducers, initialAuthState } from './auth'
import { saveLoginToken } from '../constants/login'

describe('authReducers', () => {
  it('default state', () => {
    expect(authReducers(undefined, {
      type: 'asdad',
      payload: {}
    })).toEqual(initialAuthState)
  })
  it('should render default state if unchecked type', () => {
    expect(authReducers(initialAuthState, {
      type: 'asdad',
      payload: {}
    })).toEqual(initialAuthState)
  })
  it('saveLoginToken', () => {
    expect(authReducers(initialAuthState, {
      type: saveLoginToken,
      payload: {
        token: 'sample token'
      }
    })).toEqual({
      token: 'sample token'
    })
  })
})
