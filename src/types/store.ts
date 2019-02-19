import { RouterState } from "connected-react-router"
import { LoginState } from "../modules/authentication/reducers/login"

export type RootStore = {
  router: RouterState,
  login: LoginState
}
