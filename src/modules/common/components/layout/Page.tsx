import React, { SFC } from 'react'
import { Helmet } from 'react-helmet'
import { RouteProps } from 'react-router'
import { PrivatePage } from '../route/PrivatePage'
import { GuestPage } from '../route/GuestPage'

export interface InterfacePageProps extends RouteProps {
  title: string
  description: string,
  isPrivate: boolean
}

export const Page: SFC<InterfacePageProps> = ({
  title,
  description,
  isPrivate = false,
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
    { isPrivate ? <PrivatePage {...props}/> : <GuestPage {...props}/> }
  </div>
)
