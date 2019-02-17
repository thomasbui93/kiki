import * as React from 'react'
import { Link } from 'react-router-dom'
import { MenuItem } from '../../../../services/cms/menu'

export type MenuState = {
  menuItems: {
    [key: string]: boolean
  }
}

export type MenuProps = {
  menuItems: MenuItem[]
}

export class Menu extends React.PureComponent<MenuProps, MenuState>{
  constructor(props: MenuProps) {
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

  public renderMenuItem(menuItem: MenuItem) {
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

  public hasChildren(menuItem: MenuItem) {
    return menuItem.children && menuItem.children.length > 0
  }

  public toggleMenuItem(key: string) {
    const menuItems = this.state.menuItems
    menuItems[key] = !menuItems[key]
    this.setState({
      menuItems
    })
  }

  public renderMenu(menuItems: MenuItem[]) {
    return menuItems.map(this.renderMenuItem.bind(this))
  }

  public render() {
    return this.renderMenu(this.props.menuItems)
  }
}
