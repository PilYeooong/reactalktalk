import React from 'react'
import { Link } from 'react-router-dom';

import './styles.scss';
const Button = ({ name, to }) => {
  return (
    <button className="button-component">
      <Link to={to}>{name}</Link>
    </button>
  )
}

export default Button;
