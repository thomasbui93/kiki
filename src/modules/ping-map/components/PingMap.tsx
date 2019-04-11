import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { Coordinate } from '../../../types/common/Coordinate'

export type PingMapProps = {
  center: Coordinate
}

export const PingMap = (props: PingMapProps) => {
  return (
    <Map center={props.center} zoom={13}>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors'
      />
      <Marker position={props.center}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker>
    </Map>
  )
}
