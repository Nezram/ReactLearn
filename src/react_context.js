import React, { useState } from "react";
import ShowDayAndNight from "./react_context__container";
import MyContext from "./context";



export default function DayAndNight() {
  const [day, setDay] = useState({
    cont: "container container_day",
    sun_day: "sun sun_day",
  });
  const [night, setNight] = useState({
    cont: "container container_night",
    sun_night: "sun sun_night",
  });

  const [flag, setFlag] = useState(true);

  function setDayOrNight() {
    setFlag(flag ? false : true);
  }

  return (
    <MyContext.Provider value={{setDayOrNight, flag}}>
      <ShowDayAndNight day={day} night={night} flag={flag} />
    </MyContext.Provider>
  );
}
