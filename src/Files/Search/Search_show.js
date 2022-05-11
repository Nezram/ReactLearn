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

  return (
    <ul>
      {txt.map((e) => {
        if (e.includes(props.text)) {
          let col = e.replace(props.text, `<span>${props.text}</span>`)
          return <li dangerouslySetInnerHTML={{__html:col}}/>;
        }
      })}
    </ul>
  );
}

export default ShowTable;
