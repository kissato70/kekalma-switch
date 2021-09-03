import React, { useContext } from "react";
import { switchContextType } from "@kekalma/switch";

type myProps = { context: React.Context<switchContextType> };

export default function Info(props : myProps) {
  const switchBox = useContext(props.context);
  return (
    <React.Fragment>
      <span style={{ margin: "0 5px" }}>
        {switchBox.switchMode ? "on" : "off"}
      </span>
    </React.Fragment>
  );
}
