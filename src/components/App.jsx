import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Portal from './Portal';

// import ExerciseImage from "./ExerciseImage";
import ExerciseCategory from './ExerciseCategory';
import Navbar from "./Navbar";
import Landing from "./Landing";
import MuscleMap from './MuscleMap';
import MuscleCategory from './MuscleCategory';
import Title from './Title';
import Modal from './Modal';

import Home from '../pages/Home';
import Community from "../pages/Community";
import MuscleGroups from "../pages/MuscleGroups";
import Workouts from "../pages/Workouts";







// import Facebook from './Facebook';

// styles
import '../sass/main.scss';

import data from "../data/category_to_exercise";
import { timingSafeEqual } from 'crypto';

// console.log('DATA', data);
// console.log(Object.keys(data).sort());

 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      exerciseCategories: [],
      exercises: [],
      activeCategory: null,
      dataCategory: null,
      activeTab: 'overview',
      // isModalActive: false,
      exerciseTitle: null
    };

    console.log('DATA', data);
    console.log("exerciseTitle", this.state.exerciseTitle);
    // console.log('------ACTIVE CATEGORY--------', data[this.state.activeCategory])

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.showModal = this.showModal.bind(this);
    // this.setExerciseTitle = this.setExerciseTitle.bind(this);

  }


  componentDidMount() {
  }

  setExerciseList() {

  }

  // setExerciseTitle(e){
  //   this.setState({
  //     exerciseTitle: e.target.value
  //   })
  //   console.log('E.TARGET.VALUE', e.target.value)
  // }

  setActiveMuscleCategory = category => {
    console.log("would set", category);
    this.setState({
       activeCategory: category,
       dataCategory: category.name
     });
  };

  handleCategoryClick() {
    this.setState({
      activeTab: 'overview'
    })
  }
  
  setActiveTab = e => {
    this.setState({ activeTab: e.target.id }, () => {
      console.log(this.state.activeTab)
    });
  }


  showModal() {
    this.setState(prevState => {
      return {
        isModalActive: !prevState.isModalActive
      };
    })
  }
 


  render() {
    if (this.state.isLoading) {
      return "app is loading...";
    }


    console.log('dataCategory', this.state.dataCategory);
    console.log('dataCategory Name', data[this.state.dataCategory])
    console.log("Exercise Title =======", this.state.exerciseTitle);
  
  

    return (
      <div>
        <Navbar />
        <Title />
        {/* {this.state.exerciseOverlay ? (
          <Modal />
        ) : ( */}
        <div>
          <MuscleMap
            setActiveMuscleCategory={this.setActiveMuscleCategory}
            handleCategoryClick={this.handleCategoryClick}
            getDataCategory={this.getDataCategory}
          />
          <MuscleCategory
            activeCategory={this.state.activeCategory}
            handleCategoryClick={this.handleCategoryClick}
            setActiveTab={this.setActiveTab}
            activeTab={this.state.activeTab}
            active={this.state.active}
            dataCategory={this.state.dataCategory}
            showModal={this.showModal}
            isModalActive={this.state.isModalActive}
            setExerciseTitle={this.setExerciseTitle}
          />
        </div>
        ){/* } */}
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
  