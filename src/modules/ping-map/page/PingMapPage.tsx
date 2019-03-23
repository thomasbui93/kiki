import React, { Fragment } from 'react'
import { PingMap } from '../components/PingMap'

export class PingMapPage extends React.Component {
  public render() {
    return (
      <Fragment>
        <h1>Realtime Ping Map</h1>
        <PingMap />
      </Fragment>
    )
  }
}
