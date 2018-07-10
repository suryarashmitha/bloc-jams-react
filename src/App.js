import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
class App extends Component {
  render() {
    return (

      <div className="App container">
      <nav className="navbar navbar-light bg-light">
        <p className="navbar-brand">
          <Link to='/'><img src="/assets/images/bloc_jams_logo.png" width="50" height="50" className="d-inline-block align-top" alt=""/></Link>
        </p>
        <p className="navbar-item">
          <Link to='/'>Landing</Link>
        </p>
        <p className="navbar-item">
          <Link to='/library'>Library</Link>
        </p>
      </nav>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
