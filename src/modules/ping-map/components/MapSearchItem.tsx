import React from 'react'
import { EuiIcon } from '@elastic/eui'
export type MapSearchItemProps = {
  title: string,
  coordinate: [number, number],
  zoomToLocation: (coordinate: [number, number], title: string) => void
}
export const MapSearchItem = (props: MapSearchItemProps) => (
  <div className='map-search__item'
    key={props.title}
    onClick={() => props.zoomToLocation(props.coordinate, props.title)}>
    <EuiIcon type='mapMarker' size='l' />
    <span>{props.title}</span>
  </div>
)
