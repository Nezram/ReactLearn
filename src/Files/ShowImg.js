import React from "react";

class ShowImg extends React.Component {
  constructor() {
    super();
    this.state = {
      ImgSrc: ``,
      show: ``,
      isLoading: true,
    };
    this.chang = this.chang.bind(this);
    this.sub = this.sub.bind(this);
   }

  chang(event) {
    this.setState({ ImgSrc: event.target.value });
  }

  sub(event) {
    event.preventDefault();
    this.setState({
      show: <img src={this.state.ImgSrc} alt="" />,
    });
  }

  render() {
    return (
      <form onSubmit={this.sub} action="">
        <input type="text" onChange={this.chang} />
        <input type="submit" value="Вывод" />
        <div id="div">{this.state.show}</div>
      </form>
    );
  }
}

export default ShowImg;
