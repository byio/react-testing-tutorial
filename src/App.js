import React, { Component } from 'react';

class App extends Component {

  constructor () {
    super();

    this.state = {
      counter: 0,
    }

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement () {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
    }));
  }

  onDecrement () {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
    }));
  }

  render () {
    const { counter } = this.state;

    <div>
      <h1>My Counter</h1>
      <p>{counter}</p>

      <button
        type="button"
        onClick={this.onIncrement}
      >
        Increment
      </button>

      <button
        type="button"
        onClick={this.onDecrement}
      >
        Decrement
      </button>

    </div>
  }

}

export default App;
