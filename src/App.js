import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFishData } from './app/fishData/dataSlice';
import { fetchBugData } from './app/bugData/dataSlice';
import { fetchSeaCreaturesData } from './app/seaCreaturesData/dataSlice';
import { Header } from './components/Header/Header';
import { FishPage } from './pages/FishPage';
import { BugPage } from './pages/BugPage';
import { SeaCreaturePage } from './pages/SeaCreaturePage';
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import './App.css';

function App() {
    const fish = useSelector((state) => state.fishData.fish);
    const fishStatus = useSelector(state => state.fishData.status);

    const bugs = useSelector((state) => state.bugData.bugs);
    const bugStatus = useSelector(state => state.bugData.status);

    const seaCreatures = useSelector((state) => state.seaCreaturesData.seaCreatures);
    const seaCreaturesStatus = useSelector(state => state.seaCreaturesData.status);

    const dispatch = useDispatch();

    useEffect(() => {
      if (fishStatus == 'idle') {
        dispatch(fetchFishData());
      }

      if (bugStatus == 'idle') {
        dispatch(fetchBugData());
      }

      if (seaCreaturesStatus == 'idle') {
        dispatch(fetchSeaCreaturesData());
      }
    }, [fishStatus, bugStatus, seaCreaturesStatus, dispatch])

  return (
    <Router>
    <div className="App">
    <Header />
        <Route 
          exact 
          path="/" 
          render={() => {
            return ( <Redirect to="/fish" />
            )}} />
        <Route exact path="/fish" component={FishPage} />
        <Route exact path="/bugs" component={BugPage} />
        <Route exact path="/seacreatures" component={SeaCreaturePage} />
    </div>
    </Router>
  );
}

export default App;
