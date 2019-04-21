import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { children, onIncrement, onDelete, counter } = this.props;
    return (
      <div>
        <span>{children}</span>
        <span className={this.getBatchClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <button
          onClick={() => onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBatchClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  hide() {
    return "display: none";
  }
}

export default Counter;
