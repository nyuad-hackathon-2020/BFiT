import React, { Component } from "react";
import { Link } from "react-router-dom";
import WorkoutPage from "./WorkoutPage.js";
import BGImage from "../images/yogaBg.jpg";
import Friends from "./Friends.js";
import CoreImageOne from "../images/workout5.png";
import CardioImageOne from "../images/workout4.png";
import CoreImageTwo from "../images/workout3.png";
import CardioImageTwo from "../images/workout1.png";

// import WorkoutPic from "../../images/workoutMain.";
export class MainPage extends Component {
  selectBodyPart = id => {
    this.props.selectedBodyPart(id); // change it to state 3 (lighten map and remove modal)
    // this.selectActive = this.selectActive.bind(this);
  };

  // selectActive = id => {
  //   var x;
  //   x = document.getElementsByClassName("card");
  //   for (var i = 0; i < x.length; i++) {
  //     x[i].className = "card";
  //   }
  //   document.getElementById(id).className = "active";
  // };

  render() {
    return (
      <div id="jumbotronMain">
        <div id="jumboImage">
          <img src={BGImage} alt="" />
          <div id="wrapMessage">
            <div class="jumboText">Welcome Johnny!</div>
            <div class="jumboText">What would you like to work on today?</div>
            <Link to="/blueprint" id="gotoworkout" activeClassName="activeNav">
              <button id="workoutEnterButton">
                {" "}
                <b>
                  {this.props.hasSelected
                    ? "Start "
                    : "Please Select A Workout Below"}
                </b>
                {this.props.selectedWorkout}
                {this.props.hasSelected ? " Workout" : ""}
              </button>
            </Link>
            <Link to="/friends" id="gotoworkout" activeClassName="activeNav">
              <button
                id="workoutEnterButton"
                style={{ marginLeft: "20px", marginTop: "35px" }}
              >
                {" "}
                <b>Workout With Friends!</b>
              </button>
            </Link>
          </div>
        </div>
        <div id="chooseBodyPartCards">
          <div class="row">
            <div class="column">
              <a
                href="#"
                onClick={() => {
                  this.selectBodyPart("Lower Body");
                }}
                // onClick={() => {
                //   this.selectActive("lowerBody");
                // }}
                id="lowerBody"
              >
                <div class="card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h3 id="lowerBody">Lower Body</h3>
                      <img id="dashboardPic" src={CardioImageOne}></img>
                    </div>
                    <div class="flip-card-back">
                      <h3>Calf Raises</h3>
                      <h3>Fire Hydrants</h3>
                      <h3>Glute Bridges</h3>
                      <h3>Kickbacks</h3>
                      <h3>Lunges</h3>
                      <h3>Romanian Deadlifts</h3>
                      <h3>Step-Ups</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="column">
              <a
                href="#"
                onClick={() => {
                  this.selectBodyPart("Core");
                }}
                // onClick={() => {
                //   this.selectActive("core");
                // }}
                id="core"
              >
                <div class="card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <h3 id="lowerBody">Core</h3>
                      <img id="dashboardPic" src={CoreImageOne}></img>
                    </div>
                    <div class="flip-card-back">
                      <h3>Bicycle Crunches</h3>
                      <h3>Jackknives</h3>
                      <h3>Russian Twists</h3>
                      <h3>Scissors</h3>
                      <h3>Sit-Ups</h3>
                      <h3>Toe Touches</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div class="column">
              <div class="card">
                <h3 id="lowerBody">Upper Body</h3>
                <img id="dashboardPic" src={CoreImageTwo}></img>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3 id="lowerBody">Cardio</h3>
                <img id="dashboardPic" src={CardioImageTwo}></img>
              </div>
            </div>
          </div>
        </div>
        {/* <div id="workoutOverviewInfo" style={{ display: "" }}>
          <div class="row"></div>
        </div> */}

        {/* <div id="bottomControls">
          {" "}
          <button>
            {" "}
            <Link to="/blueprint" activeClassName="activeNav">
              {this.props.selectedWorkout}
            </Link>
          </button>
        </div> */}
      </div>
    );
  }
}

export default MainPage;
