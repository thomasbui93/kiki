import React, { Component } from 'react'
import { Navigation } from '../navigation/Navigation'
import { MediaQueryContext } from '../media-query/MediaQuery'
import { MOBILE_VIEWPORTS } from '../../../../services/cms/media-query'

export type LayoutState = {
  isNavigationDisplay: boolean
}

export class Layout extends Component<object, LayoutState> {
  public static contextType = MediaQueryContext
  public state: LayoutState = {
    isNavigationDisplay: false
  }

  constructor(props: any) {
    super(props)
    this.onClickContent = this.onClickContent.bind(this)
    this.setNavigation = this.setNavigation.bind(this)
  }

  public onClickContent() {
    if (MOBILE_VIEWPORTS.indexOf(this.context) > -1) {
      this.setNavigation(false)
    }
  }

  public setNavigation(navigationState: boolean) {
    this.setState({
      isNavigationDisplay: navigationState
    })
  }

  public render() {
    return (
      <div className='layout'>
        <Navigation
          setNavigation={this.setNavigation}
          isExpanded={this.state.isNavigationDisplay}/>
        <div className='content'
          onClick={this.onClickContent}>
          { this.props.children }
        </div>
      </div>
    )
  }
}
