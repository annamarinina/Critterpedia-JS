import React from 'react';
import { Header } from './components/Header/Header';
import { HomePage } from './HomePage';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
        <Route exact path="/" component={HomePage} />
    </div>
    </Router>
  );
}

export default App;
