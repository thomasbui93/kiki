import { RouterState } from "connected-react-router"
import { LoginState } from "../modules/authentication/reducers/login"
import { AuthState } from "../modules/authentication/reducers/auth"

export type RootStore = {
  router: RouterState,
  login: LoginState,
  auth: AuthState
}
