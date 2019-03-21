import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
const mockStore = configureStore([])

it('renders without crashing', () => {
  const div = document.createElement('div')
  const store = mockStore({
    login: {
      isLogin: false,
      isError: false,
      isRequesting: false,
      error: false,
    },
    auth: {
      token: 'adsasd',
    }
  })
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})
