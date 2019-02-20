import { manufactureError } from '../error/error-message'

export type AuthenticationData = {
  email: string,
  password: string,
}

let counter = 0

export const authenticate = async ({email, password}: AuthenticationData): Promise<string> => {
  return new Promise((resolve, reject) => {
    counter ++
    if (counter % 2) {
      setTimeout(() => resolve('login token'), 500)
    } else {
      setTimeout(() => reject(manufactureError({message: 'Wrong email and password.'})), 500)
    }
  })
}
