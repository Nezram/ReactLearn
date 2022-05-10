import React from "react";
import "./seaarch_style.css";

function ShowTable(props) {
  const txt = [
    `Привет`,
    `Hello`,
    `человеческая мысль; в общем плане связная и полная последовательность символов.`,
    `English`,
    `bad`,
    `человеческая мысль; в общем плане связная и полная последовательность символов.`,
    `Japan`,
    `Russia`,
    `Kitten`,
    `Dog`,
    `Play`,
    `Vet`,
    `Cat`,
    `Bottle`,
    `mouse`,
  ];
  function t() {
    return {__html:<span className="findtext">{props.text}</span>}
  }

  return (
    <ul>
      {txt.map((e) => {
        if (e.includes(props.text,)) {
          return (
            <li>
              {e.replace(props.text,dangerouslySetInnerHTML={t()} )}
            </li>
          );
        }
      })}
    </ul>
  );
}

export default ShowTable;
