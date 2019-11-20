import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';

import Home from '../pages/Home';
import Community from "../pages/Community";
import Exercises from "../pages/Exercises";
import MuscleGroups from "../pages/MuscleGroups";
import Workouts from "../pages/Workouts";

// import Facebook from './Facebook';

// styles
import '../sass/main.scss';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/community" component={Community} />
          <Route exact path="/exercises" component={Exercises} />
          <Route exact path="/muscle-groups" component={MuscleGroups} />
          <Route exact path="/workouts" component={Workouts} />
        </div>
      </Switch>
        {/* <Facebook /> */}
    </>
  );
}

export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <h1>Deezler</h1>
    //   </header>
    //     <Facebook />
    // </div>