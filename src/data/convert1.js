const fs = require('fs')

const exercises = require("./exercises");


const categories = {}


exercises.forEach(e => {
  const key = e.primary;
  const id = e.id;

  if (!categories[key]) {
    categories[key] = {};
  }

  if (!categories[key].exercise) {
	  categories[key].exercise = [];
  }

  categories[key].name = key;

	return categories[key].exercise.push(e)

})

console.log(categories)
console.log('foo')

// console.log(exercises)
// console.log(exercises)

// this takes a file name, and a string to write
const data = `export default ` + JSON.stringify(categories, null, 4);
fs.writeFileSync("category_to_exercise.js", data);
