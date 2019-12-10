import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import ExerciseImage from "./ExerciseImage";
import ExerciseCategory from './ExerciseCategory';
import Navbar from "./Navbar";

import Home from '../pages/Home';
import Community from "../pages/Community";
import Exercises from "../pages/Exercises";
import MuscleGroups from "../pages/MuscleGroups";
import Workouts from "../pages/Workouts";



// import Facebook from './Facebook';

// styles
import '../sass/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseCategories: [],
      exercises: [],
      exerciseImages: []
    };

    this.getExercisesByID = this.getExercisesByID.bind(this);
    // this.handleExercises = this.handleExercises.bind(this);
  }

  componentDidMount() {
    axios.get("https://wger.de/api/v2/exercisecategory/").then(res => {
      this.setState({ exerciseCategories: res.data.results });
    });
  }

  getExercisesByID = (id) => {
    axios.get(`https://wger.de/api/v2/exercise?status=2&category=${id}&language=2&limit=50`)
      .then(res => {
        console.log(res)
        this.setState({ exercises: res.data.results })
      })
  }

  // handleExercises = (id) => {
  //    this.getExercisesByID(id);
  // }




  render() {
    return (
      <>
        <Navbar />
        <ExerciseCategory
          categories={this.state.exerciseCategories}
          exercises={this.state.exercises}
          getExercisesByID={this.getExercisesByID}
          handleExercises={this.handleExercises}
        />
        {/* <Switch>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/community" component={Community} />
            <Route exact path="/exercises" component={Exercises} />
            <Route exact path="/muscle-groups" component={MuscleGroups} />
            <Route exact path="/workouts" component={Workouts} />
          </div>
        </Switch> */}
        {/* <Facebook /> */}
      </>
    );
  }
}

export default App;


    // <div className="App">
    //   <header className="App-header">
    //     <h1>Deezler</h1>
    //   </header>
    //     <Facebook />
    // </div>