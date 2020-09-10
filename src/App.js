import React, { Component } from "react";
import "./App.css";
import Table from "./compoments/EmployeeTable/EmployeeTable";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Table />
      </div>
    );
  }
}

export default App;
