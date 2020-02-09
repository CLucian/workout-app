const fs = require('fs')
const path = require('path');
const { resolve } = require('path')

const exercises = require("./exercises");


const categories = {}


exercises.forEach(e => {
  const key = e.primary;
  const id = e.id;
  const image = e.img;

  if (!categories[key]) {
    categories[key] = {};
  }

  if (!categories[key].exercise) {
	  categories[key].exercise = [];
  }

  categories[key].name = key;

  if (!e.img) {
    e.img = ["_images/web/shoulder-shrugs-1.png",
            "_images/web/shoulder-shrugs-2.png"
            ]

    // console.log(e);
  }


  if (e.img.length === 0) {
    e.img = [
      "_images/web/shoulder-shrugs-1.png",
      "_images/web/shoulder-shrugs-2.png"
    ];

    // console.log(e.img)
  }

  let path = resolve(__dirname, `../../public/exercise-images/images-web/${e.img[0].substring(12)}`);

  if (
      !(fs.existsSync(path))
    ) {
      e.img = [
        "_images/web/shoulder-shrugs-1.png",
        "_images/web/shoulder-shrugs-2.png"
      ];
      // Create your own logic to make sure you delete it from the original img array or something
  }

  


	return categories[key].exercise.push(e)


})

// console.log(categories)
// console.log();
// console.log(pathWay);

// console.log(exercises)

// this takes a file name, and a string to write
const data = `export default ` + JSON.stringify(categories, null, 4);
fs.writeFileSync("category_to_exercise.js", data);
