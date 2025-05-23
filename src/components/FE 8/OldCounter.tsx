import React, { Component } from "react";

type CounterState = {
  count: number;
};

export class OldCounter extends Component<{}, CounterState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div className="p-6 max-w-xs mx-auto text-center border rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Counter</h2>
        <p className="text-xl mb-4">{this.state.count}</p>
        <button
          onClick={this.increment}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Increment
        </button>
      </div>
    );
  }
}
