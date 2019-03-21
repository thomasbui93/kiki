export const authTokenKey = 'auth_token'

export const saveToStorage = (key: string, data: any): boolean => {
  try {
    window.sessionStorage.setItem(key, data)
    return true
  } catch (err) {
    return false
  }
}

export const getFromStorage = (key: string): any => {
  return window.sessionStorage.getItem(key)
}

export const getAuthToken = () => getFromStorage(authTokenKey)

export const updateAuthToken = (token: string) => saveToStorage(authTokenKey, token)

export const isAuthenticationExist = () => !!getAuthToken()
