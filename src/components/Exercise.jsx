import React from 'react';
import axios from 'axios';

class Exercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // exerciseImages: []
    };
  }



  render() {
    const { imageByExerciseID, exercise } = this.props

    // console.log(exercise)

    /*
      imageByExerciseID = {
        123: {image: '...'} 
      }

      imageByExerciseID[exercise] = 

      const id = exercise.id
    */

    /* 
      const id = 123
      const id2 = 'foo'

      const hashtable = {
        123: 'some value',
        foo: 'another value'
      }


      hashtable['123']  // 'some value'
      hashtable[id]     // 'some value'

      hashtable['foo']  // 'another value'
      hashtable[id2]    // 'another value' , when the key is a variable, you do this
      hashtable.foo     // 'another value', when you what to access the key on an object, you can do this
    */

    // TODO - make sure imageData actually exists or set a default or empty object
    /* 
      1.
      const imageData = imageByExerciseID[exercise.id] || {image: 'some_default'}
      const img = imageData.image 

      2.
      const img = imageData == null ? 'some_default_url' : imageData.image
    */

    const imageData = imageByExerciseID[exercise.id]

    const img = imageData == null ? 'some_default_url' : imageData.image

    // console.log('full object', imageByExerciseID[exercise.id])
    // console.log('YOUR OBJECT IS', imageData);



    // const imagekey = 'image'
    // const imgURL = imageData.image;
    // function getImageURL(imgURL = 'https://wger.de/media/exercise-images/191/Front-squat-1-857x1024.png.30x30_q85_crop-smart.png'){
    //   return imageData['image']
    // }
    // const imgURL = () => imageData['image'] || 'undefined';
  
    // const imgURL = imageData[imagekey];    
    // console.log("table is", imageByExerciseID);

    // console.log(this.props.exerciseImage.image)
    return (
      <div className="exercise-box">
        {this.props.exercise.name}
        {img}
        {/* {this.props.exerciseImage.image} */}
          {/* // <img src={exerciseImage.image} alt="pic" /> */}
      </div>
    );
  }
}

export default Exercise;