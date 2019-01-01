import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'reset-css'
import './scss/app.scss'

import App from './App'
import registerServiceWorker from './serviceWorker'
import configureStore, { history } from './store'

const store = configureStore()
const target = document.getElementById('root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
)
registerServiceWorker()
