import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link className="navbar-tab" to="/">
          The Deezle Dictionary
        </Link>
        <Link className="navbar-tab" to="/community">
          Community
        </Link>
        <Link className="navbar-tab" to="/workouts">
          Workouts
        </Link>
        <Link className="navbar-tab" to="/muscle-groups">
          Muscle Groups
        </Link>
        <Link className="navbar-tab" to="/exercises">
          Exercises
        </Link>
        {/* <a className="navbar-tab">About Me</a>
        <a className="navbar-tab">Exercise 5</a>
        <a className="navbar-tab">Exercise 6</a> */}
      </div>
    );
  }
}
