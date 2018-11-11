import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
class Hello extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "welcome",
      title: "hi"
    };
    this.updateMessage = this.updateMessage.bind(this);
  }
  updateMessage() {
    this.setState({
      message: "my friend (from changed state)!",
      title: "dddd"
    });
  }

  render() {
    return (
      <div>
        <h1>Hello {this.state.message}!</h1>
        <h1>{this.state.title}</h1>
        <button onClick={this.updateMessage}>Click me!</button>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
