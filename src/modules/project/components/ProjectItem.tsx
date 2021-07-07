import React from 'react'
import { ProjectProps } from "../types/ProjectProps"
import { Link } from "react-router-dom"

export const ProjectItem = (props: ProjectProps) => (
  <Link className="euiFlexItem" to={`/project/${props.id}`}>
    <button className="euiCard euiCard--centerAligned euiCard--isClickable euiCard--hasIcon">
      <span className="euiCard__content">
        <span className="euiTitle euiTitle--medium euiCard__title">{props.title}</span>
        <div className="euiText euiText--small euiCard__description">
          <p>{props.description}</p>
        </div>
      </span>
      <span className="euiCard__footer" />
    </button>
  </Link>
)
