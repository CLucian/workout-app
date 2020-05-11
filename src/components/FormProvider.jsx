import React from 'react';

import FormContext from './FormContext';





class FormProvider extends React.Component {
	constructor() {
	super();


	this.state = {
		items: [],
		test: 'Test state',
		// handleDelete,
		// addArrayItem: (newItem) => {
		// 	this.setState({
		// 		items: newItem
		// 	})
		// 	console.log(newItem)
		// }

		addArrayItem: (newItem) => {
			this.setState({
				items: [...this.state.items, newItem]
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
		// const splicedArray = this.state.exerciseArray.splice(index, 1)
		// this.setState({ exerciseArray: splicedArray })
	}


	render() {

		const value = {
			...this.state,
			handleDeleteEx: this.handleDeleteEx
		}

		console.log('THIS IS THE NEW ARRAY ITEM', this.state.items)
		// console.log('THIS IS THE VALUE', value)

		return (
			<FormContext.Provider value={value}>
				{this.props.children}
			</FormContext.Provider>
   		);
	}
}


export default FormProvider;