import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'
import { Helmet } from 'react-helmet'
import { Page } from './Page'
import { GuestPage } from '../route/GuestPage'

describe('Page', () => {
  const title = 'Title'
  const description = 'Description'
  it('should render successfully with suffient data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter >
        <Page path='/'
          title={title}
          description={description}
          isPrivate={false}
          exact={true}/>
      </MemoryRouter>,
      div
    )
  })

  it('should render Navigation and content element', () => {
    const page = mount(
      <MemoryRouter >
        <Page path='/'
          title={title}
          description={description}
          isPrivate={false}
          exact={true}/>
      </MemoryRouter>
    )
    expect(page.find(Helmet).length).toBe(1)
  })

  it('should render GuestPage and content element', () => {
    const page = mount(
      <MemoryRouter >
        <Page path='/a'
          title={title}
          description={description}
          isPrivate={false}
          exact={true}/>
      </MemoryRouter>
    )
    expect(page.find(GuestPage).length).toBe(1)
  })
})
