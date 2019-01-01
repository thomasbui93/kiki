import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'

import { Navigation } from './Navigation'

describe('Navigation', () => {
  const mockSetNavigation = (isExpanded: boolean) => true
  it('should render successfully with suffient data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter >
        <Navigation isExpanded={false} setNavigation={mockSetNavigation}/>
      </MemoryRouter>,
    div
    )
  })

  it('should have collapse class if isExpanded is false', () => {
    const navigation = mount(
      <MemoryRouter >
        <Navigation isExpanded={false} setNavigation={mockSetNavigation}/>
      </MemoryRouter>
    )
    expect(navigation.find('.is-collapsed').length).toBe(1)
  })

  it('should have call setNavigation with negated isExpanded', () => {
    const mock = {
      mockSetNavigation(isExpanded:boolean) {
        return isExpanded
      }
    }
    const spy = jest.spyOn(mock, 'mockSetNavigation')
    const navigation = mount(
      <MemoryRouter >
        <Navigation isExpanded={true} setNavigation={mock.mockSetNavigation}/>
      </MemoryRouter>
    )
    navigation.find('.toggle').simulate('click')
    expect(spy).toHaveBeenCalledWith(false)
  })
})