import React from 'react'
import './Button.css'

export default Props => {
  let classes = 'button '
  classes += Props.operation ? 'operation' : ''
  classes += Props.double ? 'double' : ''
  classes += Props.triple ? 'triple' : ''

  return (
    <button
    onClick={e => Props.click && Props.click(Props.label)}
     className={classes}>
  {Props.label}
</button>

)

  }