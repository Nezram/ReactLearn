import React from "react";
let x = 0;
let y = 0
class Div extends React.Component {
  constructor(props) {
    super(props);
    this.state = { valueLeft: props.valueLeft };
    this.state = { valueTop: props.valueTop };
    this.rightClick = this.rightClick.bind(this);
    this.upClick = this.upClick.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.downClick = this.downClick.bind(this);
  }
  rightClick() {
    x += 10;
    this.setState({ valueLeft: x + `px` });
    console.log(this.state.valueLeft, x);
  }
  upClick() {
    y -= 10;
    this.setState({ valueTop: y + `px` });
    console.log(this.state.valueTop, x);
  }
  leftClick() {
    x -= 10;
    this.setState({ valueLeft: x + `px` });
    console.log(this.state.valueLeft, x);
  }
  downClick() {
    y+= 10;
    this.setState({ valueTop: y + `px` });
    console.log(this.state.valueTop, x);
  }

  render() {
    return (
      <div style={{
          top: this.state.valueTop,
          left: this.state.valueLeft }} className="container">
        <button onClick={this.upClick} className="button">Верх</button>
        <button onClick={this.downClick} className="button">Вниз</button>
        <button onClick={this.rightClick} className="button">
          Вправо
        </button>
        <button onClick={this.leftClick} className="button">Влево</button>
      </div>
    );
  }
}

export default Div;
