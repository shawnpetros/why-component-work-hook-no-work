import { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      rem: props.initial,
    };

    this.tick = this.tick.bind(this);
  }

  tick() {
    this.setState(({ rem }) => ({ rem: rem > 0 ? rem - 1 : 0 }));
  }

  componentDidMount() {
    this.id = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  render() {
    return (
      <div data-testid="timer">
        <p>Timer</p>
        <div data-testid="remaining-time">{this.state.rem}</div>
        <button data-testid="end-time" onClick={() => clearInterval(this.id)}>
          End Timer
        </button>
      </div>
    );
  }
}

export default Timer;
