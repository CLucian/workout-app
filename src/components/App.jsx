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
      activeTab: "overview",
      // isModalActive: false,
      exerciseTitle: null,

    };

    console.log("DATA", data);
    console.log("exerciseTitle", this.state.exerciseTitle);
    // console.log('------ACTIVE CATEGORY--------', data[this.state.activeCategory])

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.showModal = this.showModal.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    // this.handleFormChange = this.handleFormChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.setExerciseTitle = this.setExerciseTitle.bind(this);
  }

  componentDidMount() {}


  addNewItem(newItem) {
    console.log("THIS IS THE NEWITEM", newItem);
  }

  

  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });

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
      activeTab: "overview"
    });
  }

  setActiveTab = e => {
    this.setState({ activeTab: e.target.id }, () => {
      console.log(this.state.activeTab);
    });
  };

  showModal() {
    this.setState(prevState => {
      return {
        isModalActive: !prevState.isModalActive
      };
    });
  }

  render() {
    if (this.state.isLoading) {
      return "app is loading...";
    }

    

    // console.log("THIS IS THE INPUT EQUIPMENT", this.state.inputEquipment.length);
    console.log("dataCategory", this.state.dataCategory);
    console.log("dataCategory Name", data[this.state.dataCategory]);
    console.log("Exercise Title =======", this.state.exerciseTitle);

    return (
      <div className="master-div">
        {/* <Navbar /> */}
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
            // handleFormChange={this.handleFormChange}
            // handleSubmit={this.handleSubmit}
            // formSubData={formSubData}
            addNewItem={this.addNewItem}
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

