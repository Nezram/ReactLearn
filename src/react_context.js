import React, { useState } from "react";

export default function DayAndNight() {
  const [day, setDay] = useState({
    cont: "container container_day",
    sun_day: "sun sun_day",
  });
  const [night, setNight] = useState({
    cont: "container container_night",
    sun_night: "sun sun_night",
  });

  const [flag, setFlag] = useState(true)

  return (
    <div className={flag ? day.cont : night.cont}>
      <div className={flag ? day.sun_day : night.sun_night}></div>
      <input type="button" onClick={()=>setFlag(flag ? false : true)} className="but" value={flag ? "night" : "day"} />
    </div>
  );
}
