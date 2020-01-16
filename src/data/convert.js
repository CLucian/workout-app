// this maps `primary` to exercise
/* 
{
	chest: [exerciseID, exerciseID],
	shoulders: [exerciseID, exerciseID],
}
*/

const exercises = require('./exercises')

console.log(exercises.length)

const categories = {}

exercises.forEach(e => {
	const key = e.primary
	const id = e.id

	if (!categories[key]){
		categories[key] = []
		// categories.chest = 0
	}
	// categories.chest = categories.chest + 1
	categories[key].push(id);


	// if (!categories[e.primary]){
	// 	categories[e.primary] = 0
	// }
	// categories[e.primary]++

	// if (!e.primary){
	// 	// console.log(e)
	// }
})

console.log(categories)