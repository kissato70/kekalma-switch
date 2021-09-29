import React, { CSSProperties, useContext, useState, useEffect } from 'react';
import 'reset-css';

export type switchContextType = {
  switchMode : boolean,
  setSwitchMode : (value: boolean) => void
}

export type switchProps = {
  id?: string,
  context?: React.Context<switchContextType>,
  onSwitch?: Function,
  label?: string,
  initValue?: boolean,
  height?: string,
  width?: string,
  borderON?: string,
  borderOFF?: string,
  colorON?: string,
  colorOFF?: string,
  bgColorON?: string,
  bgColorOFF?: string,
  switchStyle?: CSSProperties,
  knobStyle?: CSSProperties
}

export function Switch(props: switchProps) {
  let [mode, setMode] = useState(false)
  let setSwitchMode: switchContextType['setSwitchMode']
  if (props.context) {
    ({ setSwitchMode } = useContext(props.context))
  }
  
  useEffect(() => {
    if (props.initValue) setMode(props.initValue)
    if (props.context && props.initValue) setSwitchMode(props.initValue)
  }, [ props.initValue])

  const switchHandler = () => {
    setMode(!mode)
    if (props.context) setSwitchMode(!mode)
    if (props.onSwitch) {
      if (props.id) props.onSwitch(!mode, props.id)
      else props.onSwitch(!mode)
    }
  }


  const label = props.label ? <span className="switchLabelClass" style={{ margin: '0 5px' }}>{props.label}</span> : ''

  
  const switchClass = `${mode ? "kekalma-switch-on" : "kekalma-switch-off"}`
  
  const CSSparam = (HwD: string[]) => {
    let Hn = ""
    let Hdd = ""
    Hn = HwD.filter(c => /^[0-9\.]$/.test(c)).join("")
    HwD.splice(0, Hn.length)
    Hdd = HwD.join("")
    const Hnn = parseFloat(Hn)
    return {
      Hn,
      Hnn,
      Hdd
    }
  }

  const {Hn,Hnn,Hdd } = CSSparam( (props.height || '1em').split(""))
  
  const BorderON    = props.borderON || '#888'
  const BorderOFF   = props.borderOFF || '#888'
  const ColorON     = props.colorON  || '#0C0'
  const ColorOFF    = props.colorOFF || '#888'
  const BgColorON   = props.bgColorON  || '#bfb'
  const BgColorOFF  = props.bgColorOFF || 'white'


  const switchStyle = {
    boxSizing: 'border-box',
    height: `${Hn}${Hdd}`,
    width: props.width || `${Hnn * 1.7}${Hdd}`,
    borderRadius: `${Hn}${Hdd}`,
    display: 'flex',
    wrap: "none",
    cursor: 'pointer',
    flexDir: 'row',
    ...props.switchStyle || {}
  } as const
  let switchState: React.CSSProperties
  if (mode) {
    switchState = {
      flexDirection: "row-reverse",
      border: `${Hnn / 9}${Hdd} solid ${BorderON}`,
      backgroundColor: `${BgColorON}`
    } as const
  } else {
    switchState = {
      flexDirection: "row",
      border: `${Hnn / 9}${Hdd} solid ${BorderOFF}`,
      backgroundColor: `${BgColorOFF}`,
    } as const
  }

  const knobStyle = {
    boxSizing: 'border-box',
    width: `${Hnn * 0.75}${Hdd}`,
    height: `${Hnn * 0.75}${Hdd}`,
    borderRadius: `${Hn}${Hdd}`,
    border: 'none',
    alignSelf: 'center',
    ...props.knobStyle || {}
  } as const
  let knobState: React.CSSProperties
  if (mode) {
    knobState = {
      backgroundColor: `${ColorON}`,
      marginRight: `-${Hnn / 100}${Hdd}`
    } as const
  } else {
    knobState = {
      backgroundColor: `${ColorOFF}`,
      marginLeft: `-${Hnn / 100}${Hdd}`
    } as const
  }

  return (
    <React.Fragment>
      {label}
      <div className={switchClass} style={{ ...switchStyle, ...switchState }} onClick={switchHandler}>
        <div style={{ ...knobStyle, ...knobState }}></div>
        </div>
    </React.Fragment>  
  )
}