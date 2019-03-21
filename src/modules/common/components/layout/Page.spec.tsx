import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MemoryRouter, Route } from 'react-router'
import { mount } from 'enzyme'
import { Helmet } from 'react-helmet'
import { Page } from './Page'

describe('Page', () => {
  const title = 'Title'
  const description = 'Description'
  it('should render successfully with suffient data', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <MemoryRouter >
        <Page title={title} description={description} isPrivate={false}/>
      </MemoryRouter>,
      div
    )
  })

  it('should render Navigation and content element', () => {
    const page = mount(
      <MemoryRouter >
        <Page title={title} description={description} isPrivate={true}/>
      </MemoryRouter>
    )
    expect(page.find(Helmet).length).toBe(1)
  })
})
