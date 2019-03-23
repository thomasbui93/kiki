import React, { SFC, ReactChild } from 'react'
import { Link } from 'react-router-dom'

export type DashboardItemProps = {
  title: string,
  sup: string,
  children: ReactChild,
  link: string
}

export const DashboardItem :SFC<DashboardItemProps> = (props: DashboardItemProps) => (
  <Link to={props.link}>
    <div className="euiCard euiCard--centerAligned euiCard--isClickable euiCard--hasIcon">
      <div className="euiCard__top">
        { props.children }
      </div>
      <div className="euiCard__content">
        <span className="euiTitle euiTitle--medium euiCard__title">{ props.title }</span>
        <div className="euiText euiText--small euiCard__description">
          <p>{props.sup}</p>
        </div>
      </div>
    </div>
  </Link>
)
