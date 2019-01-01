import * as React from 'react'
import { Link } from 'react-router-dom'
import { InterfaceMenuItem } from '../../../../services/navigation/menu'

export interface InterfaceMenuState {
  menuItems: {
    [key: string]: boolean
  }
}

export interface InterfaceMenuProps {
  menuItems: InterfaceMenuItem[]
}

export class Menu extends React.PureComponent<InterfaceMenuProps, InterfaceMenuState>{
  constructor(props: InterfaceMenuProps) {
    super(props)
    this.state = {
      menuItems: this.getInitialStateFromProps()
    }
  }

  public getInitialStateFromProps() {
    const menuItemsState: {
      [key: string]: any
    } = {}
    this.props.menuItems.forEach(({ key }: { key: string }) => {
      menuItemsState[key] = false
    })
    return menuItemsState
  }

  public renderMenuItem(menuItem: InterfaceMenuItem) {
    const { key } = menuItem
    const isOpen = this.state.menuItems[key]
    return <div className='menu-item' key={key}>
      <div className={`menu-item__link ${isOpen ? 'is-active' : ''}`}>
        <Link to={menuItem.url}>{menuItem.title}</Link>
        {
          this.hasChildren(menuItem) ?
            <div className='menu-item__toggle' onClick={this.toggleMenuItem.bind(this, key)}>
              {isOpen ? '+': '-'}
            </div> : ''
        }
      </div>
      {
        this.hasChildren(menuItem) ?
          <div className='menu-item__list'>
            {menuItem.children!.map(this.renderMenuItem.bind(this))}
          </div> : ''
      }
    </div>
  }

  public hasChildren(menuItem: InterfaceMenuItem) {
    return menuItem.children && menuItem.children.length > 0
  }

  public toggleMenuItem(key: string) {
    const menuItems = this.state.menuItems
    menuItems[key] = !menuItems[key]
    this.setState({
      menuItems
    })
  }

  public renderMenu(menuItems: InterfaceMenuItem[]) {
    return menuItems.map(this.renderMenuItem.bind(this))
  }

  public render() {
    return this.renderMenu(this.props.menuItems)
  }
}
