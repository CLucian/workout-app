import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import ExerciseImage from "./ExerciseImage";
import ExerciseCategory from './ExerciseCategory';
import Navbar from "./Navbar";
import Landing from "./Landing";
import MuscleMap from './MuscleMap';
import MuscleCategory from './MuscleCategory';
import Title from './Title';

import Home from '../pages/Home';
import Community from "../pages/Community";
import Exercises from "../pages/Exercises";
import MuscleGroups from "../pages/MuscleGroups";
import Workouts from "../pages/Workouts";

import Abdominals from './muscle-category-components/Abdominals';
import Back from "./muscle-category-components/Back";
import Biceps from "./muscle-category-components/Biceps";
import Calves from "./muscle-category-components/Calves";
import Chest from "./muscle-category-components/Chest";
import Glutes from "./muscle-category-components/Glutes";
import Hamstrings from "./muscle-category-components/Hamstrings";
import Other from "./muscle-category-components/Other";
import Quadriceps from "./muscle-category-components/Quadriceps";
import Shoulders from "./muscle-category-components/Shoulders";
import Triceps from "./muscle-category-components/Triceps";






// import Facebook from './Facebook';

// styles
import '../sass/main.scss';

import data from "../data/category_to_exercise";

// console.log('DATA', data);
// console.log(Object.keys(data).sort());


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseCategories: [],
      exercises: [],
      activeCategory: null
      // muscleOverview: null
      // isLoading: true
    };
    // this.getExercisesByID = this.getExercisesByID.bind(this);
  }

  componentDidMount() {}

  setActiveMuscleCategory = category => {
    console.log("would set", category);
    this.setState({ activeCategory: category });
  };

  render() {
    if (this.state.isLoading) {
      return "app is loading...";
    }

    return (
      <div>
        {/* <Navbar /> */}
        <Title />
        <MuscleMap setActiveMuscleCategory={this.setActiveMuscleCategory} />
        {/* <ExerciseCategory data={data} /> */}
        <MuscleCategory activeCategory={this.state.activeCategory} />
        {/* <Landing /> */}

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
      </div>
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




    // componentDidMount() {
  //   this.fetchInitialData();
  // }

  // fetchInitialData(){
  //   // fetch all initial data you need - exercises by category and images

  //   // FETCH EVERYTHING
  //   Promise.all([
  //     this.getExerciseCategories(),
  //     this.getExerciseImageByID()
  //   ]).then(() => {
  //     console.log('ALL IS DONE')
  //     this.setState({isLoading: false})
  //   })
  // }

  // getExerciseCategories(){
  //   return axios.get("https://wger.de/api/v2/exercisecategory/").then(res => {
  //     this.setState({ exerciseCategories: res.data.results });
  //     console.log('CATEGORIES IS DONE')
  //   });
  // }

  // getExerciseImageByID = () => {
  //   return axios
  //     .get(
  //       `https://wger.de/api/v2/exerciseimage/?is_main=True2&language=2&limit=500`
  //     )
  //     .then(res => {
  //       const imageByExerciseID = {};
  //       res.data.results.forEach(item => {
  //         imageByExerciseID[item.exercise] = item;
  //       });

  //       this.setState({
  //         imageByExerciseID
  //       });
  //       console.log(this.state.imageByExerciseID);
  //       console.log('IMAGES LOADING IS DONE', imageByExerciseID);
  //     });
  // };

  // getExercisesByID = id => {
  //   axios
  //     .get(
  //       `https://wger.de/api/v2/exercise?status=2&category=${id}&language=2&limit=50`
  //     )
  //     .then(res => {
  //       // console.log(res);
  //       this.setState({ exercises: res.data.results });
  //     });
  // };
 

  // componentDidMount() {
  //   Objectkeys(data)
  // }
  