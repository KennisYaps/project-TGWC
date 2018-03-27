import React, { Component } from 'react';
import './App.css';
import MyRouter from './components/MyRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyRouter/>
      </div>
    );
  }
}

export default App;
