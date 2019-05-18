import React from 'react'
import { ProjectProps } from '../types/ProjectProps'
import { ProjectItem } from '../components/ProjectItem'
import { Spiner } from '../../common/components/core/loaders/Spiner'
import { EuiFlexGrid, EuiEmptyPrompt, EuiButton } from '@elastic/eui'
import { useDataProvider } from '../../../hooks/DataProviderHook'
import { getProjects, PROJECT_LIST_URL } from '../../../services/key-management/project'

export const ProjectManagementPage = () => {
  const { data } = useDataProvider<ProjectProps[]>(PROJECT_LIST_URL, [], getProjects)
  const list = data.data as ProjectProps[]
  return (
    <>
      { data.isLoading ? <Spiner /> : ''}
      { data.isError ? 'Error occurred': ''}
      <EuiFlexGrid gutterSize="s" columns={3}>
        { list.map((item:any) => <ProjectItem {...item} key={item.id}/>) }
        {
          list.length === 0 ?
          <EuiEmptyPrompt
            iconType="editorStrike"
            title={<h2>You have no projects</h2>}
            body={
              <>
                <p>You&rsquo;ll need create project to track your data</p>
              </>
            }
            actions={<EuiButton color="primary" fill={true}>Create</EuiButton>}
          /> : ''
        }
      </EuiFlexGrid>
    </>
  )
}
