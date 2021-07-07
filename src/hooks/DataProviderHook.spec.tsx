import React from 'react'
import { dataReducer, DataProviderActionType, generateFetchData, useDataProvider } from './DataProviderHook'

describe('dataReducer', () => {
  const initialState = {
    isLoading: false,
    isError: false,
    data: 1
  }
  it('loading state', () => {
    expect(dataReducer(initialState, {
      type: DataProviderActionType.LOADING
    })).toEqual({
      isLoading: true,
      isError: false,
      data: 1
    })
  })

  it('done state', () => {
    expect(dataReducer(initialState, {
      type: DataProviderActionType.DONE,
      data: 2
    })).toEqual({
      isLoading: false,
      isError: false,
      data: 2
    })
  })

  it('done state', () => {
    expect(dataReducer(initialState, {
      type: DataProviderActionType.ERROR
    })).toEqual({
      isLoading: false,
      isError: true,
      data: 1
    })
  })
})

describe('generateFetchData', () => {
  it('should generate an async function that call dispatch error when it fails', async () => {
    const dispatch = jest.fn()
    const fetchService = (url: string) => new Promise((resolve, reject) => {
      reject('error')
    })
    const fetchData = generateFetchData(dispatch, fetchService, 'sample', false)
    await fetchData()
    expect(dispatch).toBeCalledWith({
      type: DataProviderActionType.LOADING
    })
    expect(dispatch).toBeCalledWith({
      type: DataProviderActionType.ERROR
    })
  })

  it('should generate an async function that call dispatch done with it succeeds', async () => {
    const dispatch = jest.fn()
    const fetchService = (url: string) => new Promise((resolve, reject) => {
      resolve(1)
    })
    const fetchData = generateFetchData(dispatch, fetchService, 'sample', false)
    await fetchData()
    expect(dispatch).toBeCalledWith({
      type: DataProviderActionType.LOADING
    })
    expect(dispatch).toBeCalledWith({
      type: DataProviderActionType.DONE,
      data: 1
    })
  })
})
