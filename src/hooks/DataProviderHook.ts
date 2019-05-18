import React, { useReducer, useEffect, useState } from 'react'

export enum DataProviderActionType {
  LOADING = 'LOADING',
  DONE = 'DONE',
  ERROR = 'ERROR'
}

export type DataProviderProps<T> = {
  data: T,
  isLoading: boolean,
  isError: boolean
}

export type DataProviderAction = {
  type: DataProviderActionType,
  data?: any
}

export type FetchService<T> = (url: string) => Promise<T>

export function dataReducer<T>(state: DataProviderProps<T>, action: DataProviderAction): DataProviderProps<T> {
  switch (action.type) {
    case DataProviderActionType.LOADING:
      return {
        ...state,
        isLoading: true,
        isError: false
      }
    case DataProviderActionType.DONE:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data
      }
    case DataProviderActionType.ERROR:
      return {
        ...state,
        isError: true,
        isLoading: false
      }
    default:
      return state
  }
}

export function generateFetchData<T>(
  dispatch: React.Dispatch<DataProviderAction>,
  fetchService: FetchService<T>,
  url: string,
  didCancel: boolean) {
  return async () => {
    dispatch({
      type: DataProviderActionType.LOADING
    })

    try {
      const response: T = await fetchService(url)

      if (!didCancel) {
        dispatch({
          type: DataProviderActionType.DONE,
          data: response
        })
      }
    } catch (error) {
      if (!didCancel) {
        dispatch({ type: DataProviderActionType.ERROR })
      }
    }
  }
}

export function useDataProvider<T>(initialUrl: string, initialData: T, fetchService: FetchService<T>) {
  const [url, setUrl] = useState(initialUrl)
  const [data, dispatch] = useReducer(dataReducer, {
    isLoading: false,
    isError: false,
    data: initialData
  })

  useEffect(() => {
    let didCancel = false
    generateFetchData(dispatch, fetchService, url, didCancel)()
    return () => {
      didCancel = true
    }
  }, [url])

  return {
    data,
    fetch: (urlQuery: string) => setUrl(urlQuery)
  }
}
