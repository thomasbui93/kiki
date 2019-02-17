import * as React from 'react'
import { MenuItem, getMenuItems } from '../../../../services/cms/menu'
import { Menu } from './Menu'
import { HamburgerMenu } from './HamburgerMenu'

export type NavigationProps = {
  setNavigation: (isExpanded: boolean) => void,
  isExpanded: boolean
}

export class Navigation extends React.PureComponent<NavigationProps>{
  constructor(props: NavigationProps) {
    super(props)
    this.toggleNavigation = this.toggleNavigation.bind(this)
  }
  public toggleNavigation() {
    this.props.setNavigation(!this.props.isExpanded)
  }
  public render() {
    const menuItems: MenuItem[] = getMenuItems()
    return (
      <div className={`navigation ${this.props.isExpanded ? '' : 'is-collapsed'}`}>
        <div className='navigation__header'>
          <HamburgerMenu className="display-block display-sm-none"
            isActive={this.props.isExpanded}
            onClick={this.toggleNavigation}/>
        </div>
        <div className='navigation__content'>
        { menuItems.length > 0 ? <Menu menuItems={menuItems}/> : '' }
        </div>
      </div>
    )
  }
}
