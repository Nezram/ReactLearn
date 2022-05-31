import React from "react";
import Button from "./react_context__button";

export default function ShowDayAndNight(props) {
  return (
    <div className={props.flag ? props.day.cont : props.night.cont}>
      <div
        className={props.flag ? props.day.sun_day : props.night.sun_night}
      ></div>
      <Button/>
    </div>
  );
}
