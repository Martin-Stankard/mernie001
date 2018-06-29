import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/app.navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppNavbar/>
        <h1>Howdy</h1>
      </div>
    );
  }
}

export default App;
