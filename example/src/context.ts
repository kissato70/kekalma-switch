import React from 'react'
import { switchContextType }  from '@kekalma/switch'

export const switchContext1 = React.createContext<switchContextType>({
  switchMode: false,
  setSwitchMode: (value: boolean)=>{}
})

export const switchContext2 = React.createContext<switchContextType>({
  switchMode: false,
  setSwitchMode: (value: boolean)=>{}
})

