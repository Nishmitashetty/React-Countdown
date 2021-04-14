//import Button from "./Button";
import React from "react";
export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10, isplaying: true, label: "Pause" };
  }

  componentDidMount() {
    this.handleclick = () => {
      if (this.state.label === "Pause" && this.state.isplaying === true) {
        this.setState({ isplaying: false, label: "Play" });
      } else if (
        this.state.label === "Play" &&
        this.state.isplaying === false
      ) {
        this.setState({ isplaying: true, label: "Pause" });
      }
    };

    setInterval(() => {
      if (this.state.count > 0 && this.state.isplaying) {
        this.setState({ count: this.state.count - 1, label: "Pause" });
      } else if (this.state.count === 0) {
        this.setState({ count: 20, label: "Play", isplaying: false });
      }
    }, 1000);
  }

  render() {
    return (
      <>
        <div>Countdown: {this.state.count}</div>
        <button onClick={this.handleclick}>{this.state.label}</button>
        {/* <Button isplaying={true} count={this.state.count} /> */}
      </>
    );
  }
}
