import React from 'react';
import axios from 'axios';

const fs = require('fs');

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // exerciseImages: []
    };


    // let imageFile = require(`../../public/exercise-images/images-web/${this.props.exercise.name}-1.png`);

    // fs.stat(imageFile, function(err, stat) {
    //   if (err == null) {
    //     console.log(imageFile, 'File exists');
    //   } else if (err.code === 'ENOENT') {
    //     // file does not exist
    //     console.log('file does not exist')
    //   } else {
    //     console.log('Some other error:', err.code)
    //   }
    // })


  }





  render() {
    // const { imageByExerciseID, exercise } = this.props

    // const imageData = imageByExerciseID[exercise.id]

    // const img = imageData == null ? 'some_default_url' : imageData.image

    // let exerciseImage = this.props.exercise.name;
    
    let root = "_images/web/";

    // "bench-press-1.png"
    let exerciseImage = this.props.exercise.name + "-1.png";
    let exerciseImg = this.props.exercise.img[0];

    let finalImg = exerciseImg.substring(12);

    // "_images/web/bench-press-1.png"
    let exerciseURL = root + exerciseImage;

    let emptyArray = [];

    console.log(this.props.exercise.img)

    return (
      <div className="exercise-box">
        {this.props.exercise.title}
        <div className="photo-box">
            <img
              className="exercise-photo"
              src={`exercise-images/images-web/${finalImg}`}
              alt="pic"
            />
        </div>
      </div>
    );
  } 
}


            // {
            //   exerciseURL === this.props.exercise.img[0] ? (
            //     <img
            //       className="exercise-photo"
            //       src={`exercise-images/images-web/${finalImg}`}
            //       alt="pic"
            //     />
            //   ) : (
            //     console.log("No image file")
            //   );
            // }



// {
//   `../images/exercise-images/images-web/${this.props.exercise.name}-1.png` ? (
//     <img
//       className="exercise-photo"
//       src={require(`../images/exercise-images/images-web/${this.props.exercise.name}-1.png`)}
//       alt="pic"
//     />
//   ) : null;
// }

export default Exercise;


