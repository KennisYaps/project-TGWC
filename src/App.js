import React, { Component } from 'react';
// import MyRouter from './components/MyRouter';
import './App.css';
import Layout from './components/Layout/Layout';
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <MyRouter/> */}
        <Layout/>
      </div>
    );
  }
}

export default App;
