import React from "react";

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ``,
    };
    this.textChange = this.textChange.bind(this);
  }

  textChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
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
      <div>
        <input type="text" onChange={this.textChange} />
        <ul>
          {txt.map((element, index) => {
            if (element.includes(this.state.text)) {
              let x = element.split(``);
              let y = x.findIndex((e) => e === this.state.text);
              console.log(y);
              x[y] = (
                <span
                  style={{
                    background: `blue`,
                  }}
                >
                  {x[y]}
                </span>
              );
              return <li>{x}</li>;
            } else if (this.state.text === ``) {
              return <li>{element}</li>;
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Table;
