import React from 'react'

export type ServiceApi<T> = () => Promise<T>

export function useReactFetchHook<T>(serviceApi: ServiceApi<T>) {
  const [isLoading, setLoading] = React.useState<boolean>(false)
  const [isError, setError] = React.useState<boolean>(false)
  const [list, setList] = React.useState<T[]>([])

  React.useEffect(() => {
    let isMounted = true
    serviceApi()
      .then((response) => {
        if (!isMounted) {
          return false
        }
        if (!!response) {
          setLoading(false)
          setError(false)
          if (response instanceof Array) {
            setList(response)
          }
        }
      })
      .catch(() => {
        setLoading(false)
        setError(true)
      })
    return () => {
      isMounted = false
    }
  }, [])

  return [
    isError,
    isLoading,
    list
  ]
}
