import React, { useState } from 'react'
import { Switch } from "@kekalma/switch"
import { switchContext1 as Context1 } from "./context";
import { switchContext2 as Context2} from "./context";
import Info from "./Info";

export default function App() {
  const [switchMode1, setSwitchMode1] = useState(false);
  const [switchMode2, setSwitchMode2] = useState(false);
  const switchHandler = (newValue : boolean, id: string) => {
    console.log(`Switch state '${id}' :`, newValue)
  }
  return (
    <React.Fragment>
    <h1>This is an Example project for @kekalma/switch development</h1>
    <div style={{ display: "flex", flexWrap: "wrap", margin: "5px" }}>
      <Context1.Provider value={{ switchMode: switchMode1, setSwitchMode: setSwitchMode1 }}>
          <Switch
            id="1"
            context={Context1}
            label="Switch1:"
            initValue={false}
            onSwitch={switchHandler}
        />
          <Info context={Context1}/>
      </Context1.Provider>
      
      <div style={{ flexBasis: "100%", height: "10px" }}></div>
      
      <Context2.Provider value={{ switchMode : switchMode2, setSwitchMode : setSwitchMode2 }}>
        <Switch
          id="2"
          context={Context2}
          label="Switch2:"
          initValue={true}
          onSwitch={switchHandler}
        />
        <Info context={Context2} />
      </Context2.Provider>
        <div style={{ flexBasis: "100%", height: "10px" }}></div>
        <Switch
          id="3"
          label="Switch3:"
          initValue={false}
          onSwitch={switchHandler}
      />
      <div style={{ flexBasis: "100%", height: "10px" }}></div>
        <Switch
          id="4"
          label="Switch4:"
          initValue={true}
          onSwitch={switchHandler}
      />
        
    </div>
    </React.Fragment>
  )
}