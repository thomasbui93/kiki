import * as React from 'react'
import { shallow } from 'enzyme'
import { PrivatePage } from './PrivatePage'
import * as session from '../../../../services/storage/session'
import { NotFoundPage } from '../static/page/NotFoundPage'
import { Route, Redirect } from 'react-router'

describe('PrivatePage render', () => {
  it('should render normal route if authentication token is valid', () => {
    const isAuthenticationExist = jest.spyOn(session, 'isAuthenticationExist')
    isAuthenticationExist.mockImplementation(() => false)
    const guestComponent = shallow(<PrivatePage
      component={NotFoundPage}
      />)
    expect(guestComponent.find(Redirect).length).toBe(1)
  })
  it('should render Redirect if authentication token is empty', () => {
    const isAuthenticationExist = jest.spyOn(session, 'isAuthenticationExist')
    isAuthenticationExist.mockImplementation(() => true)
    const guestComponent = shallow(<PrivatePage
      component={NotFoundPage}
      />)
    expect(guestComponent.find(Route).length).toBe(1)
  })
})
