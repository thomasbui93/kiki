import * as React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Layout } from './modules/common/components/layout/Layout'
import { Page } from './modules/common/components/layout/Page'
import { NotFoundPage } from './modules/common/components/static/page/NotFoundPage'
import { Footer } from './modules/common/components/layout/Footer';
import { MediaQuery } from './modules/common/components/media-query/MediaQuery';

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <MediaQuery>
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
      </MediaQuery>
    </BrowserRouter>
    <Footer />
  </React.Fragment>
)

export default App
