import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, title: "Item A" },
      { id: 2, value: 0, title: "Item B" },
      { id: 3, value: 0, title: "Item C" },
      { id: 4, value: 0, title: "Item D" }
    ]
  };

  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    console.log("App - constructor");
  }

  componentDidMount() {
    //Ajax call to set state
    console.log("App - Mounted");
  }

  handleReset() {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  }

  handleDelete(counterId) {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  }

  handleIncrement(counter) {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  }

  render() {
    console.log("App - Rendered");

    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
