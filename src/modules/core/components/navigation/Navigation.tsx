import * as React from 'react'
import { InterfaceMenuItem, getMenuItems } from '../../../../services/navigation/menu'
import { Menu } from './Menu'
import { HamburgerMenu } from './HamburgerMenu'

export interface InterfaceNavigationProps {
  setNavigation: (isExpanded: boolean) => void,
  isExpanded: boolean
}

export class Navigation extends React.PureComponent<InterfaceNavigationProps>{
  constructor(props: InterfaceNavigationProps) {
    super(props)
    this.toggleNavigation = this.toggleNavigation.bind(this)
  }
  public toggleNavigation() {
    this.props.setNavigation(!this.props.isExpanded)
  }
  public render() {
    const menuItems: InterfaceMenuItem[] = getMenuItems()
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
