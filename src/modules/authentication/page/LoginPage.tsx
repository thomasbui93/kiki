import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { boundMethod } from 'autobind-decorator'
import { LoginComponent, LoginCredential } from '../components/login/LoginComponent'
import { requestAuthenticationAction } from '../actions/login'
import { RootStore } from '../../../types/store'
import { LoginState } from '../reducers/login'

export type LoginPageProps = {
  authenticate: (credential: LoginCredential) => void
}

export class LoginPage extends Component<LoginPageProps & LoginState> {
  @boundMethod
  public submitAction(credential: LoginCredential) {
    this.props.authenticate(credential)
  }

  public render() {
    return (
      <Fragment>
        <div>Login In Your Account</div>
        <LoginComponent
          isRequesting={this.props.isRequesting}
          initialData={{email: '', password: ''}}
          externalErrors={[this.props.error]}
          submitAction={this.submitAction}/>
      </Fragment>
    )
  }
}

export const mapStateToProps = ({ login }: RootStore) => {
  return {
    isLogin: login.isLogin,
    isError: login.isError,
    isRequesting: login.isRequesting,
    error: login.error
  }
}

export const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    authenticate(credential: LoginCredential) {
      dispatch(requestAuthenticationAction(credential))
    }
  }
}

export const ConnectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage)
