import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    let name='chenjian'
    const isGood=true
    const goodHtml=<span>is good</span>
    const notgoodHtml=<span>is not good</span>
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {name}</h1>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          
        </p>
        <p> {isGood ? goodHtml: notgoodHtml}</p>
      </div>
    );
  }
}

export default App;
