import React, { Component } from 'react'
import { DashboardItem } from './DashboardItem'
import { EuiFlexGrid, EuiFlexItem } from '@elastic/eui'
import { EuiIcon } from '@elastic/eui'

export class DashboardMenu extends Component<any, any> {
  public render() {
    return <EuiFlexGrid gutterSize="s" columns={3}>
      <EuiFlexItem>
        <DashboardItem
          link="/ping-map"
          title="Ping Map"
          sup="Real time data flow via a map">
          <EuiIcon
            type="gisApp"
            size="xl"
          />
        </DashboardItem>
      </EuiFlexItem>
  </EuiFlexGrid>
  }
}
