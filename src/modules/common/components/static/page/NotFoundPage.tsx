import * as React from 'react'
import { Link } from 'react-router-dom';
export const NotFoundPage = () => (
  <div>
    <h1 className="text-center">Oops! You've seemed lost...</h1>
    <p className="text-center">Click <Link to="/">here</Link> to return to home page. </p>
  </div>
)
