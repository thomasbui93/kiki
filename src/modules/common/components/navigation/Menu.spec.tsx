import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'

import { Menu } from './Menu'

describe('Menu', () => {
  const menuItems = [
    {
      key: '1',
      title: 'Menu 1',
      url: 'menu-1'
    },
    {
      key: '2',
      title: 'Menu 2',
      url: 'menu-2'
    },
    {
      key: '3',
      title: 'Menu 3',
      url: 'menu-3'
    }
  ]
  const menuItemsHasChildren = [
    {
      key: '1',
      title: 'Menu 1',
      url: 'menu-1',
      children: [
        {
          key: '1-1',
          title: 'Menu 1-1',
          url: 'menu-1-1',
        }
      ]
    },
    {
      key: '2',
      title: 'Menu 2',
      url: 'menu-2'
    },
    {
      key: '3',
      title: 'Menu 3',
      url: 'menu-3'
    }
  ]
  it('should render successfully with suffient data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter >
        <Menu menuItems={[]}/>
      </MemoryRouter>,
    div
    )
  })

  it('should render corresponding menu items', () => {
    const menu = mount(
      <MemoryRouter >
        <Menu menuItems={menuItems}/>
      </MemoryRouter>
    )
    expect(menu.find('.menu-item').length).toBe(menuItems.length)
  })

  it('should initialize menuItems state', () => {
    const menuWrapper = mount(
      <MemoryRouter >
        <Menu menuItems={menuItems}/>
      </MemoryRouter>
    )
    expect(menuWrapper.find(Menu).instance().state).toEqual({
      menuItems: {
        1: false,
        2: false,
        3: false
      }
    })
  })

  it('should render menuItem with children', () => {
    const menuWrapper = mount(
      <MemoryRouter >
        <Menu menuItems={menuItemsHasChildren}/>
      </MemoryRouter>
    )
    expect(menuWrapper.find('.menu-item__toggle').length).toBe(1)
  })
})