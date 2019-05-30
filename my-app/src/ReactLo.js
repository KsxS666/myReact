import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <span style={{cursor: 'pointer'}} className="App-link" onClick={() => {this.props.history.push('/Index')}}>进入Index</span>
        </header>
      </div>
    );
  }
}

export default App;
