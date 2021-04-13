import React from 'react';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage';
import { FishPage } from './pages/FishPage';
import { BugPage } from './pages/BugPage';
import { SeaCreaturePage } from './pages/SeaCreaturePage';
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
        <Route exact path="/Fish" component={FishPage} />
        <Route exact path="/Bugs" component={BugPage} />
        <Route exact path="/Sea Creatures" component={SeaCreaturePage} />
    </div>
    </Router>
  );
}

export default App;
