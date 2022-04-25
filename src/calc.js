import React from "react";
class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: 0,
      text2: 0,
      result: 0,
      isCheck: false,
    };
    this.chach1 = this.chach1.bind(this);
    this.chach2 = this.chach2.bind(this);
    this.click = this.click.bind(this);
    this.isCheked = this.isCheked.bind(this);
  }
  chach1(event) {
    this.setState({
      text1: Number.parseInt(event.target.value),
    });
  }
  chach2(event) {
    this.setState({
      text2: Number.parseInt(event.target.value),
    });
  }

  isCheked(event) {
    this.setState({
      isCheck: event.target.checked,
    });
  }

  click(event) {
    event.preventDefault();
    this.setState({
      result:
        this.state.isCheck === false
          ? this.state.text1 + this.state.text2
          : this.state.text1 - this.state.text2,
    });
  }

  render() {
    return (
      <form onSubmit={this.click} action="">
        <input type="text" onChange={this.chach1} />
        <p>{this.state.isCheck === false ? `+` : `-`}</p>
        <input type="text" onChange={this.chach2} />
        <input type="checkbox" onChange={this.isCheked} name="" id="" />
        <input type="submit" value="Результат" />
        <p>{this.state.result}</p>
      </form>
    );
  }
}

export default Calc;
