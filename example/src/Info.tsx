import React, {useContext} from 'react'
import {switchContext1}  from './context'

export default function Info()
{
  const switchBox = useContext(switchContext1)
  return (
    <React.Fragment>
      <span style={{margin: "0 5px"}}>{switchBox.switchMode ? 'on' : 'off'}</span>
    </React.Fragment>
  )
}