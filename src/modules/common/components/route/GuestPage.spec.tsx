import * as React from 'react'
import { shallow } from 'enzyme'
import { GuestPage } from './GuestPage'
import * as session from '../../../../services/storage/session'
import { NotFoundPage } from '../static/page/NotFoundPage'
import { Route, Redirect } from 'react-router'

describe('GuestPage render', () => {
  it('should render normal route if authentication token is empty', () => {
    const isAuthenticationExist = jest.spyOn(session, 'isAuthenticationExist')
    isAuthenticationExist.mockImplementation(() => false)
    const guestComponent = shallow(<GuestPage
      component={NotFoundPage}
      />)
    expect(guestComponent.find(Route).length).toBe(1)
  })
  it('should render Redirect if authentication token is existed', () => {
    const isAuthenticationExist = jest.spyOn(session, 'isAuthenticationExist')
    isAuthenticationExist.mockImplementation(() => true)
    const guestComponent = shallow(<GuestPage
      component={NotFoundPage}
      />)
    expect(guestComponent.find(Redirect).length).toBe(1)
  })
})
