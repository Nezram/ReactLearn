import React, { useState } from "react";
import Slid from "./slid";
import "./style.css";

export default function ShowSlider() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Slid index={index} />
    </div>
  );
}
