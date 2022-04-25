import React from "react";

class TextReverse extends React.Component {
  constructor() {
    super();
    this.state = {
      text: `Пиши пожалуйста`,
      isLog: false,
    };

    this.chag = this.chag.bind(this);
    this.log = this.log.bind(this);
  }

  log(event) {
    this.setState({ isLog: event.target.checked });
    if (this.state.isLog) {
      let text = this.state.text.split(``).reverse();
      this.setState({ text: text.join(``) });
    } else {
      let text = this.state.text.split(``).reverse();
      this.setState({ text: text.join(``) });
    }
  }

  chag(event) {
    if (this.state.isLog) {
      let text = event.target.value.split(``);
      let reverseText = text.reverse();
      this.setState({ text: reverseText.join(``) });
    } else {
      this.setState({ text: event.target.value });
    }
  }
  render() {
    return (
      <div>
        <span>{this.state.text}</span>
        <input type="text" onChange={this.chag} />
        <input type="checkbox" onClick={this.log} />
      </div>
    );
  }
}
export default TextReverse;
