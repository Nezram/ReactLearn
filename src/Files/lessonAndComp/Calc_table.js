import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";

export default function Calc_table() {
  const [result, setResult] = useState(0);
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  function clic(e) {
    setResult(
      result +
        Number.parseInt(e.target.previousElementSibling.textContent) +
        Number.parseInt(e.target.nextElementSibling.textContent)
    );
    if (result > 0) {
      e.target.textContent = `${result}`;
    }
  }
  return (
    <ul>
      {number.map((e) => {
        return <li onClick={(e) => clic(e)}>{e}</li>;
      })}
    </ul>
  );
}
