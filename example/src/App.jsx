import React, { useState } from 'react'
import Switch from "@kekalma/switch"
import { switchContext1 } from "./context";
import { switchContext2 } from "./context";
import Info from "./Info";
import Info2 from "./Info2";

export default function App() {
  const [switchMode1, setSwitchMode1] = useState(false);
  const [switchMode2, setSwitchMode2] = useState(false);
  const switchHandler = (newValue) => {
    console.log('Switch state 1:', newValue)
  }
  const switchHandler2 = (newValue) => {
    console.log('Switch state 2:', newValue)
  }
  return (
    <React.Fragment>
    <div style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}>
      <switchContext1.Provider value={{ switchMode: switchMode1, setSwitchMode: setSwitchMode1 }}>
        <Switch
            context={switchContext1}
            label="Switch1:"
            initValue={false}
            onSwitch={switchHandler}
            colorON={"#faa"}
            switchStyle = {{ borderWidth: "3px"  }}
            knobStyle = {{ borderRadius: 0  }}
        />
        <Info />
      </switchContext1.Provider>
      
      <div style={{ flexBasis: "100%", height: "10px" }}></div>
      
      <switchContext2.Provider value={{ switchMode : switchMode2, setSwitchMode : setSwitchMode2 }}>
        <Switch
          context={switchContext2}
          label="Switch2:"
          initValue={true}
          onSwitch={switchHandler2}
        />
        <Info2 />
      </switchContext2.Provider>
    </div>
    </React.Fragment>
  )
}