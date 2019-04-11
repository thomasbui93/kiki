import React, { useState, useEffect } from 'react'
import { getPlaceSuggestions } from '../../../services/places/place-autocomplete'
import { AsyncState } from '../../../types/common/AsyncState'
import { MapSearchItem } from './MapSearchItem'
import { Coordinate } from '../../../types/common/Coordinate'

export type MapSearchProps = {
  zoomToLocation: (coordinate: Coordinate) => void
}

export type MapSearchState = {
  showingAutocomplete: boolean
} & AsyncState<any>

export const MapSearch = ({ zoomToLocation }: MapSearchProps) => {
  const [mapState, setMapState] = useState<MapSearchState>({
    loading: false,
    error: false,
    items: [],
    showingAutocomplete: false
  })

  const [input, setInput] = useState('')

  const zoomToCoordinate = (coordinate: Coordinate, title: string) => {
    zoomToLocation(coordinate)
    setInput(title)
    setMapState({
      ...mapState,
      showingAutocomplete: false,
    })
  }
  useEffect(() => {
    (async () => {
      if (input.length < 3 || mapState.error) {
        setMapState({
          ...mapState,
          loading: false,
          error: false,
          items: [],
          showingAutocomplete: false
        })
        return
      }
      if (items.length > 0 && !showingAutocomplete) {
        setMapState({
          ...mapState,
          items: []
        })
        return
      }
      try {
        const suggestions = await getPlaceSuggestions(input)
        setMapState({
          ...mapState,
          loading: false,
          error: false,
          showingAutocomplete: true,
          items: suggestions.map(item => ({
            ...item,
            zoomToLocation: zoomToCoordinate
          }))
        })
      } catch (error) {
        setMapState({
          ...mapState,
          loading: false,
          error: true,
          items: [],
          showingAutocomplete: false
        })
      }
    })()
  }, [input])

  const { loading, showingAutocomplete, items } = mapState
  return (
    <div className='map-search-box'>
      <div className='euiFormControlLayout'>
        <div className='euiFormControlLayout__childrenWrapper'>
          <input type='text'
            id='map-search-box'
            name='map-text'
            value={input}
            autoComplete={'off'}
            onChange={event => setInput(event.currentTarget.value)}
            placeholder='Type a location here...'
            className='euiFieldText'/>
        </div>
      </div>
      <div className='map-autocomplete-items'>
        { loading ? 'Loading ...': ''}
        { showingAutocomplete && input.length >= 3 ? items.map(MapSearchItem): '' }
      </div>
    </div>
  )
}
