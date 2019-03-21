import { Store } from "redux"
import { RootStore } from "../../types/store"
import { updateAuthToken } from "../storage/session"

export const trackStoreChange = (store: Store<RootStore>) => {
  syncAuth(store)
}

export const syncAuth = (store: Store<RootStore>) => {
  if (store.getState().auth.token !== '') {
    updateAuthToken(store.getState().auth.token)
  }
}
