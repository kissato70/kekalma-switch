import React, { useState } from 'react'
import { Switch as Switch1} from "@kekalma/switch"
import { Switch as Switch2} from "@kekalma/switch"
import { switchContext1 as Context1 } from "./context";
import { switchContext2 as Context2} from "./context";
import Info from "./Info";

export default function App() {
  const [switchMode1, setSwitchMode1] = useState(false);
  const [switchMode2, setSwitchMode2] = useState(false);
  const switchHandler = (newValue : boolean) => {
    console.log('Switch state 1:', newValue)
  }
  const switchHandler2 = (newValue: boolean) => {
    console.log('Switch state 2:', newValue)
  }
  return (
    <React.Fragment>
    <h1>This is an Example project for @kekalma/switch development</h1>
    <div style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}>
      <Context1.Provider value={{ switchMode: switchMode1, setSwitchMode: setSwitchMode1 }}>
        <Switch1
            context={Context1}
            label="Switch1:"
            initValue={false}
            onSwitch={switchHandler}
            colorON={"#faa"}
            switchStyle = {{ borderWidth: "3px"  }}
            knobStyle = {{ borderRadius: 0  }}
        />
          <Info context={Context1}/>
      </Context1.Provider>
      
      <div style={{ flexBasis: "100%", height: "10px" }}></div>
      
      <Context2.Provider value={{ switchMode : switchMode2, setSwitchMode : setSwitchMode2 }}>
        <Switch2
          context={Context2}
          label="Switch2:"
          initValue={true}
          onSwitch={switchHandler2}
        />
        <Info context={Context2} />
      </Context2.Provider>
    </div>
    </React.Fragment>
  )
}