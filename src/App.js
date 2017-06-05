import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Movie from './components/Movie';
import PageNotFound from './components/PageNotFound';
class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <div className="App-header">
              <h2>Vivacom</h2>
              <Link to="/">Home</Link>
              <Link to="/movies">Movies</Link>
            </div>
            <div className="container">
              <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/movies" component={Movies}/>
              <Route exact path="/movies/:movieId" component={Movie}/>
              <Route pattern="*" component={PageNotFound}/>
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
