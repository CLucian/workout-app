import React from 'react';
import '../App.css';
import MuscleMap from './MuscleMap';
import MuscleCategory from './MuscleCategory';
import Title from './Title';

import FormContext from './FormContext';

import '../sass/main.scss';






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


    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  }


  sendDataCategory = () => {
    this.context.addDataCategory(this.state.dataCategory);
  };

  setActiveMuscleCategory = (category) => {
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
    });
  };

  render() {
    if (this.state.isLoading) {
      return "app is loading...";
    }

    return (
      <div className="master-div">
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
            addNewItem={this.addNewItem}
          />
        </div>
        )
      </div>
    );
  }
}


export default App;


