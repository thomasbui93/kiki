import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export class PingMap extends React.Component {
  public render() {
    return (
      <Map center={[51.505, -0.09]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    )
  }
}
