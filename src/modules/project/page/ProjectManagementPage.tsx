import React from 'react'
import { getProjects } from '../../../services/key-management/project'

export type ProjectPageProps = {
  isLoading: boolean,
  isError: boolean,
  list: any[]
}

export const ProjectManagementPage = () => {
  const [data, setData] = React.useState<ProjectPageProps>({
    isLoading: false,
    isError: false,
    list: []
  })

  React.useEffect(() => {
    let isMounted = true
    getProjects()
      .then((response) => {
        if (!isMounted) {
          return false
        }
        return response ? setData({
          ...data,
          list: response,
          isLoading: false,
        }): setData({
          ...data,
          isError: true,
          isLoading: false
        })
      })
      .catch(() => setData({
        ...data,
        isError: true,
        isLoading: false
      }))
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <React.Fragment>
      <h1>Available Projects</h1>
      { data.isLoading ? 'Loading...': ''}
      { data.isError ? 'Error occurred': ''}
    </React.Fragment>
  )
}
