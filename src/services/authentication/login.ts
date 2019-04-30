import { manufactureError } from '../error/error-message'
import { encodeForm, httpForm } from '../request'

export type AuthenticationData = {
  email: string,
  password: string,
}

export const authenticate = async ({email, password}: AuthenticationData): Promise<any> => {
  return httpForm.post('auth/sign-in', encodeForm({
    email,
    password
  }))
}
