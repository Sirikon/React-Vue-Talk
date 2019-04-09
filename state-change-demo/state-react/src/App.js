import React, { Component } from 'react';
import './App.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      firstName: 'Carlos',
      lastName: 'Fernández',
      includeLastName: true
    }

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleIncludeLastNameChange = this.handleIncludeLastNameChange.bind(this);
  }

  handleFirstNameChange(event) {
    this.setState({ firstName: event.target.value })
  }

  handleLastNameChange(event) {
    this.setState({ lastName: event.target.value })
  }

  handleIncludeLastNameChange(event) {
    this.setState({ includeLastName: event.target.checked })
  }

  get fullName() {
    console.log('Calculating Full Name');

    return this.state.includeLastName
      ? `${this.state.firstName} ${this.state.lastName}`
      : this.state.firstName;
  }

  render() {
    return (
      <div className="App">
        <div>
          <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
          <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
          <input type="checkbox" checked={this.state.includeLastName} onChange={this.handleIncludeLastNameChange} />
        </div>
        <p>{this.fullName}</p>
      </div>
    );
  }
}

export default App;
