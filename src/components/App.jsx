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

import FormProvider from './FormProvider';
import FormContext from './FormContext';



// import Facebook from './Facebook';

// styles
import '../sass/main.scss';

import data from "../data/category_to_exercise";


// console.log('DATA', data);
// console.log(Object.keys(data).sort());




class App extends React.Component {
  static contextType = FormContext;

  constructor(props) {
    super(props);
    this.state = {
      exerciseCategories: [],
      exercises: [],
      activeCategory: null,
      dataCategory: null,
      activeTab: "overview",
      exerciseTitle: null,
    };

    console.log("DATA", data);
    console.log("exerciseTitle", this.state.exerciseTitle);
    console.log("THIS IS THE DATA CATEGORY", this.state.activeCategory);

    // console.log('------ACTIVE CATEGORY--------', data[this.state.activeCategory])

    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    // this.handleFormChange = this.handleFormChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.setExerciseTitle = this.setExerciseTitle.bind(this);
  }

  componentDidMount() {
    console.log("===================", this.context);
  }

  addNewItem(newItem) {
    console.log("THIS IS THE NEWITEM", newItem);
  }


  sendDataCategory = () => {
    this.context.addDataCategory(this.state.dataCategory);
  };

  setActiveMuscleCategory = (category) => {
    console.log("would set", category);
    this.setState({
      activeCategory: category,
      dataCategory: category.name,
    }, () => this.sendDataCategory())
  };

  handleCategoryClick() {
    this.setState({
      activeTab: "overview",
    });
  }

  setActiveTab = (e) => {
    this.setState({ activeTab: e.target.id }, () => {
      console.log(this.state.activeTab);
    });
  };

  render() {
    if (this.state.isLoading) {
      return "app is loading...";
    }

    // console.log("THIS IS THE INPUT EQUIPMENT", this.state.inputEquipment.length);
    console.log("dataCategory", this.state.dataCategory);
    // console.log("dataCategory Name", data[this.state.dataCategory]);
    // console.log("Exercise Title =======", this.state.exerciseTitle);

    return (
      <div className="master-div">
        {/* <Navbar /> */}
        <Title />
        <div>
          <FormContext.Consumer>
            {(context) => (
              <MuscleMap
                setActiveMuscleCategory={this.setActiveMuscleCategory}
                handleCategoryClick={this.handleCategoryClick}
                dataCategory={this.state.dataCategory}
                addDataCategory={context.addDataCategory}
                sendDataCategory={this.sendDataCategory}
              />
            )}
          </FormContext.Consumer>
          <MuscleCategory
            activeCategory={this.state.activeCategory}
            handleCategoryClick={this.handleCategoryClick}
            setActiveTab={this.setActiveTab}
            activeTab={this.state.activeTab}
            active={this.state.active}
            dataCategory={this.state.dataCategory}
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


