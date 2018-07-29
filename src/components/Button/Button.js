import React from 'react'

const Button = ({ text, link, type, eventHandler}) => (
  <a className={`btn btn-${type}`} href={link} onClick={eventHandler}>{text}</a>
)

export default Button;