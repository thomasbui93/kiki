import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Route, RouteProps } from 'react-router'

export interface InterfacePageProps extends RouteProps {
  title: string,
  description: string,
}

export class Page extends React.Component<InterfacePageProps> {
  public render() {
    const { title, description, ...props} = this.props as InterfacePageProps
    return <div className={`content-wrapper ${title.toLocaleLowerCase().split(' ').join('-')}`}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Route {...props}/>
    </div>
  }
}
