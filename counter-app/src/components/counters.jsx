import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <div key={counter.id}>
            <Counter
              key={counter.id}
              counter={counter}
              onDelete={this.props.onDelete}
              onIncrement={this.props.onIncrement}
            >
              <h4>{counter.title}</h4>
            </Counter>
            <div>{counter.value}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Counters;
