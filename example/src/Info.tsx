import React, { useContext } from "react";
import { switchContextType } from "@kekalma/switch";

type myProps = { context: React.Context<switchContextType> };

export default function Info(props : myProps) {
  const { switchMode : switchValue } = useContext(props.context);
  return (
    <React.Fragment>
      <span style={{ margin: "0 5px" }}>
        {switchValue ? "on" : "off"}
      </span>
    </React.Fragment>
  );
}
