import React, { SFC, Fragment } from 'react'
import { Route, RouteProps, Redirect } from 'react-router'
import { isAuthenticationExist } from '../../../../services/storage/session'

export const GuestPage: SFC<RouteProps> = (props: RouteProps) => (
  <Fragment>
  { isAuthenticationExist() ? <Redirect to='/'/> : <Route {...props}/> }
  </Fragment>
)
