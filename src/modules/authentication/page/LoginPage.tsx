import React, { Component } from 'react'
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiSpacer,
  EuiText
} from '@elastic/eui'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { boundMethod } from 'autobind-decorator'
import { LoginComponent, LoginCredential } from '../components/login/LoginComponent'
import { requestAuthenticationAction } from '../actions/login'
import { RootStore } from '../../../types/store'
import { LoginState } from '../reducers/login'
import { ConnectedRouterProps } from 'connected-react-router'
import { updateAuthToken } from '../../../services/storage/session'
import { AuthState } from '../reducers/auth'

export type LoginPageProps = {
  authenticate: (credential: LoginCredential) => void,
  authenticatedRedirect: () => void
}

export type LoginPageConnectedProps = LoginPageProps & LoginState & ConnectedRouterProps & AuthState
export class LoginPage extends Component<LoginPageConnectedProps> {
  @boundMethod
  public submitAction(credential: LoginCredential) {
    this.props.authenticate(credential)
  }

  public componentDidUpdate() {
    if (this.props.isLogin) {
      updateAuthToken(this.props.token)
      this.props.history.push('/')
    }
  }

  public render() {
    return (
      <div>
        <EuiFlexGroup
          direction="column"
          alignItems="center"
          gutterSize="none">
          <EuiFlexItem style={{ minWidth: 400 }}>
            <EuiTitle>
              <EuiText textAlign="center">
                <h1>Login In Your Account</h1>
              </EuiText>
            </EuiTitle>
          </EuiFlexItem>
          <EuiSpacer />
          <EuiFlexItem style={{ minWidth: 400 }}>
            <LoginComponent
              isRequesting={this.props.isRequesting}
              initialData={{email: '', password: ''}}
              externalErrors={[this.props.error]}
              submitAction={this.submitAction}/>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    )
  }
}

export const mapStateToProps = ({ login, auth }: RootStore) => {
  return {
    isLogin: login.isLogin,
    isError: login.isError,
    isRequesting: login.isRequesting,
    error: login.error,
    token: auth.token
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
