import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello World!  From Netbeans using npm... To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        Second line
        <p/>    
        <p className="Table">
        <table><tr><td>
                    Table Cell #1
                </td>
                <td>
                    Table Cell #2
                </td>
                <td>
                    Table Cell #3
                </td>
                <td>
                    Table Cell #4
                </td>
                <td>
                    Table Cell #5
                </td>
            </tr></table>
      </p>
      </div>
    );
  }
}

export default App;
