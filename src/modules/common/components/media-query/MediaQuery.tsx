import React from 'react'
import { debounce } from 'decko'
import { mediaMapping } from '../../../../services/cms/media-query'

export type BounedRange = [number, number]
export type SoleRange<T> = [number, T]
export type UpperBoundRange = [number, 'upper']
export type LowerBoundRange = [number, 'lower']
export type MediaRange = BounedRange | UpperBoundRange | LowerBoundRange

export type MediaQueryProps = {
  mediaMapping: Map<string, MediaRange>
}

export type MediaQueryState = {
  mediaQuery: string[]
}

export const isValidBound = (width: number, range: MediaRange): boolean => {
  const [bound, leftBound] = range
  switch (leftBound) {
    case 'upper':
      return bound > width
    case 'lower':
      return bound < width
    default:
      return width > Math.min(bound, leftBound)
        && width < Math.max(bound, leftBound)
  }
}

export const MediaQueryContext = React.createContext('mediaQuery')

export class MediaQuery extends React.Component<MediaQueryProps, MediaQueryState> {

  public static defaultProps = {
    mediaMapping
  }

  public state = {
    mediaQuery: [],
  }

  @debounce(100)
  public checkMediaQuery() {
    const windowWidth = window.innerWidth
      || document.documentElement!.clientWidth
      || document.body!.clientWidth
    const matches: string[] = []
    this.props.mediaMapping.forEach((range: MediaRange, key: string) => {
      if (isValidBound(windowWidth, range)) {
        matches.push(key)
      }
    })
    this.setState({
      mediaQuery: matches
    })
  }

  public componentDidMount() {
    this.checkMediaQuery()
    window.addEventListener('resize', this.checkMediaQuery.bind(this))
  }

  public render() {
    return (
      <React.Fragment>
        <MediaQueryContext.Provider value={this.state.mediaQuery.join(',')}>
          {this.props.children}
        </MediaQueryContext.Provider>
      </React.Fragment>
    )
  }
}
