import * as React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import { Layout } from './modules/common/components/layout/Layout'
import { Page } from './modules/common/components/layout/Page'
import { NotFoundPage } from './modules/common/components/static/page/NotFoundPage'
import { Footer } from './modules/common/components/layout/Footer'
import { MediaQuery } from './modules/common/components/media-query/MediaQuery'
import { ConnectedLoginPage } from './modules/authentication/page/LoginPage'
import { DashboardPage } from './modules/dashboard/page/DashboardPage'
import { PingMapPage } from './modules/ping-map/page/PingMapPage'

const App = () => (
  <React.Fragment>
    <BrowserRouter>
      <MediaQuery>
        <Layout>
          <Switch>
            <Page title='Dashboard'
              isPrivate={true}
              description='Analytics Dashboard'
              path='/'
              exact={true}
              component={DashboardPage} />
            <Page title='Realtime Ping Map'
              isPrivate={true}
              description='Ping Map tracking'
              path='/ping-map'
              exact={true}
              component={PingMapPage} />
            <Page title='Login'
              isPrivate={false}
              description='Please login to use our application'
              path='/login'
              component={ConnectedLoginPage} />
            <Page title='Not found page'
              isPrivate={false}
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
