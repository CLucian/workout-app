import React from 'react';

import FormContext from './FormContext';
import data from "../data/category_to_exercise";


class FormProvider extends React.Component {
	constructor() {
	super();


	this.state = {
		items: [],
		test: 'Test state',
		completeArray: [],
		dataCategory: null,
		workout: [],


		addDataCategory: (dataCategory) => {
			this.setState({
				dataCategory
			})
		},

		

		addArrayItem: (newItem) => {
			this.setState({
				items: [...this.state.items, newItem]
			})
		},
		addCompleteArray: (completeArray) => {
			this.setState({
				completeArray
			})
		},
		addNewWorkout: (newWorkout) => {
			this.setState({
				workout: [...this.state.workout, newWorkout]
			})
		}

		}  
		this.handleDeleteEx = this.handleDeleteEx.bind(this);
	}
	



	handleExerciseReset() {
		this.setState({items: null})
	}
	
	handleDeleteEx(id) {
		const isNotId = exercise => exercise.id !== id;
		const updatedList = this.state.items.filter(isNotId);
		this.setState({ items: updatedList })
	}


	render() {

		const value = {
			...this.state,
			handleDeleteEx: this.handleDeleteEx
		}

		console.log('THIS IS THE NEW ARRAY ITEM', this.state.items)
		console.log('===========This is the absolute completeArray============', this.state.completeArray)
		console.log('++++++++++++++++++++++++++++++++++++++++++', this.state.dataCategory)
		console.log('******************************', this.state.workout.map(obj => obj))

		return (
			<FormContext.Provider value={value}>
				{this.props.children}
			</FormContext.Provider>
   		);
	}
}


export default FormProvider;