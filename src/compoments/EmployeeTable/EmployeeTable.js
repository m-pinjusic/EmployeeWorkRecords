import React, { Component } from "react";
import "./table.css";
import Table from "react-bootstrap/Table";
import ExcelButton from "../ExportExcel/genExcelButton";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' // For some basic styling. (OPTIONAL)
import originalMoment from "moment";
import { extendMoment } from "moment-range";
const moment = extendMoment(originalMoment);




class App extends Component {
  constructor(props, context) {
    super(props, context);

    const today = moment();
    this.state = {
      data: [],
      employees: [],
      loading: true,
      error: false,
      dates: null,
      isOpen: false,
      value: moment.range(today.clone().subtract(7, "days"), today.clone())
    };



  }

  componentDidMount() {
    axios
      .get(
        "https://script.google.com/macros/s/AKfycbwnj1Y7UGzy61tfUDuD3ZoHZBPTsTuBr0Z5nIqiPLrjIahXA3Q/exec"
      )
      .then((response) => {
        this.setState({ loading: false });
        const data = response.data[0].data;
        const employees = response.data[0].employees;
        const startWork = data.shift();
        const dateInfo = { redniBroj: 1 };

        console.log(startWork);
        console.log(data);

        employees.shift();
        this.setState({ data: dateInfo });
        const array = [];
        employees.map((e, i) => {
          let objekt = {
            id: "",
            firstName: "",
          };
          objekt.id = i;
          objekt.firstName = e;

          array.push(objekt);
        });
        this.setState({ employees: array });
      })

      .catch((error) => {
        this.setState({ loading: false });
        this.setState({ error: true });
        const errorMsg = error.message;
      });
  }

  dohvatiEmployeea(employee) {
    console.log(employee);
  }

  onSelect = (value, states) => {
    this.setState({ value, states });
  };

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  renderSelectionValue = () => {
    return (
      <div>
        <div>Selection</div>
        {this.state.value.start.format("DD-MM-YYYY")}
        {" - "}
        {this.state.value.end.format("DD-MM-YYYY")}
      </div>
    );
  };


  render() {
    console.log(this.state.employees);


    return (
      <div className="container">
        <h2 className="title">Evidencija zaposlenika</h2>
        <Card className="card">
          {this.state.loading && !this.state.error && (
            <div className="position">
              <Spinner
                size="large"
                animation="border"
                role="status"
                className="spinner"
              ></Spinner>
              <h3>Loading data</h3>
            </div>
          )}
          <Card.Body className="card-body">
            <Table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>Ime i prezime</th>
                  <th>Datum</th>
                  <th>Generiraj tablicu</th>
                </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employee) => {
                  return (
                    <tr key={employee.id}>
                      <th>{employee.firstName}</th>
                      <th>

                        <div>{this.renderSelectionValue()}</div>

                        <div>
                          <input
                            type="button"
                            value="Otvori kalendar"
                            onClick={this.onToggle}
                          />
                        </div>

                        {this.state.isOpen && (
                          <DateRangePicker
                            value={this.state.value}
                            onSelect={this.onSelect}
                            singleDateRange={true}
                          />
                        )}
                      </th>
                      <th>
                        <ExcelButton
                          data={this.state.data}
                          clickedEmployee={employee.firstName}

                        />
                      </th>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default App;
