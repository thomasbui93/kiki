import React from 'react'
import { ProjectProps } from "../types/ProjectProps"
import { Link } from "react-router-dom"

export const ProjectItem = (props: ProjectProps) => (
<Link to={`/project/${props.id}`}>
  <div className='project-item'>
    <div>{props.title}</div>
    <div>{props.description}</div>
  </div>
</Link>
)
