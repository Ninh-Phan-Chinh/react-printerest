import React, { Component } from 'react';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
      </div>
    );
  }
}

export default App;