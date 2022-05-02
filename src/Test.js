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
      `World`,
      `English`,
      `bad`,
      `Poland`,
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
            if (this.state.text == element) {
              return <li>{element}</li>;
            } else if (this.state.text == ``) {
              return <li>{element}</li>;
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Table;
