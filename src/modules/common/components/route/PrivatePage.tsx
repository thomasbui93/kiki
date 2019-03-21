import React, { SFC, Fragment } from 'react'
import { Route, RouteProps, Redirect } from 'react-router'
import { isAuthenticationExist } from '../../../../services/storage/session'

export const PrivatePage: SFC<RouteProps> = (props: RouteProps) => (
  <Fragment>
  { isAuthenticationExist() ? <Route {...props}/>: <Redirect to='/login'/> }
  </Fragment>
)
