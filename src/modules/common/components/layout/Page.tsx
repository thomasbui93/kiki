import React, { SFC } from 'react'
import { Helmet } from 'react-helmet'
import { Route, RouteProps } from 'react-router'

export interface InterfacePageProps extends RouteProps {
  title: string
  description: string
}

export const Page: SFC<InterfacePageProps> = ({
  title,
  description,
  ...props
}: InterfacePageProps) => (
  <div
    className={`content-wrapper
    ${title
      .toLocaleLowerCase()
      .split(' ')
      .join('-')}`}
  >
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
    </Helmet>
    <Route {...props} />
  </div>
)
