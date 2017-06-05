import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route,Link} from 'react-router-dom'
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <h2>Vivacom</h2>
              <Link to="/">Home</Link>
            </div>
            <div className="container">
              <Route exactly pattern="/" component={Home} />
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
