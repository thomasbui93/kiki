import React from 'react'
import { getProjects } from '../../../services/key-management/project'
import { useReactFetchHook } from '../../../hooks/ReactFetchHook'
import { ProjectProps } from '../types/ProjectProps'
import { ProjectItem } from '../components/ProjectItem'

export const ProjectManagementPage = () => {
  const [isError, isLoading, list] = useReactFetchHook<ProjectProps>(getProjects)

  return (
    <React.Fragment>
      <h1>Available Projects</h1>
      { isLoading ? 'Loading...': ''}
      { isError ? 'Error occurred': ''}
      { typeof list !== 'boolean' ? list.map((item) => <ProjectItem {...item} key={item.id}/>): ''}
    </React.Fragment>
  )
}
