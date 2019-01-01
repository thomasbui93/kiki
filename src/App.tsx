import * as React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Layout } from './modules/core/components/layout/Layout'
import { Page } from './modules/core/components/layout/Page'
import { NotFoundPage } from './modules/core/components/static/page/NotFoundPage'
import { Footer } from './modules/core/components/layout/Footer';

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Page title='Login'
            description='Please login to use our application'
            path='/login' component={NotFoundPage} />
          <Page title='Not found page'
            description='Sorry we could not found your page'
            component={NotFoundPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
    <Footer />
  </React.Fragment>
)

export default App
