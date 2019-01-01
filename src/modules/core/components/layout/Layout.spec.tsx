import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'

import { Layout } from './Layout'
import { Navigation } from '../navigation/Navigation'

describe('Layout', () => {
  it('should render successfully with suffient data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter >
        <Layout />
      </MemoryRouter>,
    div
    )
  })
  it('should render Navigation and content element', () => {
    const layout = mount(
      <MemoryRouter >
        <Layout />
      </MemoryRouter>
    )
    expect(layout.find(Navigation).length).toBe(1)
    expect(layout.find('.content').length).toBe(1)
  })
})
