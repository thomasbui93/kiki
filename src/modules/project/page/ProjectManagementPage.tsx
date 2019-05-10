import React from 'react'
import { getProjects } from '../../../services/key-management/project'
import { useReactFetchHook } from '../../../hooks/ReactFetchHook'
import { ProjectProps } from '../types/ProjectProps'
import { ProjectItem } from '../components/ProjectItem'
import { Spiner } from '../../common/components/core/loaders/Spiner'
import { EuiFlexGrid } from '@elastic/eui'

export const ProjectManagementPage = () => {
  const [isError, isLoading, list] = useReactFetchHook<ProjectProps>(getProjects)
  return (
    <React.Fragment>
      <h1>Available Projects</h1>
      { isLoading ? <Spiner /> : ''}
      { isError ? 'Error occurred': ''}
      <EuiFlexGrid gutterSize="s" columns={3}>
        { typeof list !== 'boolean' ? list.map((item) => <ProjectItem {...item} key={item.id}/>): ''}
      </EuiFlexGrid>
    </React.Fragment>
  )
}
