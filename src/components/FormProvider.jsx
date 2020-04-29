import React from 'react';

import FormContext from './FormContext';

class FormProvider extends React.Component {
	state = {
		items: [],
		test: 'Test state',
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




	render() {

		console.log('THIS IS THE NEW ARRAY ITEM', this.state.items)

		return (
			<FormContext.Provider value={this.state}>
				{this.props.children}
			</FormContext.Provider>
   		);
	}
}


export default FormProvider;