import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { onReset, onIncrement, onDelete, onDecrement, counters } = this.props;
    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement} />
        ))}
      </div>
    );
  }
}

export default Counters;
