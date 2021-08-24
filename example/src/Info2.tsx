import React, {useContext} from 'react'
import {switchContext2}  from './context'

export default function Info2()
{
  const switchBox = useContext(switchContext2)
  return (
    <React.Fragment>
      <span style={{margin: "0 5px"}}>{switchBox.switchMode ? 'on' : 'off'}</span>
    </React.Fragment>
  )
}