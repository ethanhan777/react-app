import React, { Component } from 'react';
import './App.scss';
import Test from './components/test.component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="page-title">React TEST</h1>
        </header>

        <body>
          <Test />
        </body>
      </div>
    );
  }
}

export default App;
