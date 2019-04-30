import React, { Fragment, useState } from 'react'
import { PingMap } from '../components/PingMap'
import { MapSearch } from '../components/MapSearch'
import { Coordinate } from '../../../types/common/Coordinate'

export const PingMapPage = () => {
  const [coordinate, setCoordinate] = useState<Coordinate>([51.505, -0.09])
  return (
    <Fragment>
      <PingMap center={coordinate}/>
      <MapSearch zoomToLocation={setCoordinate}/>
    </Fragment>
  )
}
