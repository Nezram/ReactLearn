import React, { useContext } from "react";
import MyContext from "./context";

export default function Button() {
  const {setDayOrNight, flag} = useContext(MyContext);
  return (
    <input
      type="button"
      onClick={() => setDayOrNight()}
      className="but"
      value={flag ? "night" : "day"}
    />  
  );
}
