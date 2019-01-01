import * as React from 'react'
import { Navigation } from '../navigation/Navigation'

export class Layout extends React.PureComponent {
  public state = {
    isNavigationDisplay: false,
    isMobile: false
  }

  constructor(props: any) {
    super(props)
    this.onClickContent = this.onClickContent.bind(this)
    this.setNavigation = this.setNavigation.bind(this)
    this.syncMobileCheck = this.syncMobileCheck.bind(this)
  }

  public componentDidMount() {
    window.onresize = this.syncMobileCheck.bind(this)
  }

  public syncMobileCheck() {
    const windowWidth = window.innerWidth
      || document.documentElement!.clientWidth
      || document.body!.clientWidth
    const isMobile = windowWidth < 769
    this.setState({
      isMobile,
    })
  }

  public onClickContent() {
    if (this.state.isMobile) {
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
        <Navigation setNavigation={this.setNavigation} isExpanded={this.state.isNavigationDisplay}/>
        <div className='content' onClick={this.onClickContent}>{this.props.children}</div>
      </div>
    )
  }
}
