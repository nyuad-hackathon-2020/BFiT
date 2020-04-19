import React, { Component } from "react";
import { Link } from "react-router-dom";
import WorkoutPage from "./WorkoutPage.js";
import BGImage from "../images/yogaBg.jpg";

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
            <div class="jumboText">Welcome, User</div>
            <div class="jumboText">What would you like to work on today?</div>
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
                  <h3>Lower Body</h3>
                </div>
              </a>
            </div>
            <div class="column">
              <a
                href="#"
                onClick={() => {
                  this.selectBodyPart("core");
                }}
                // onClick={() => {
                //   this.selectActive("core");
                // }}
                id="core"
              >
                <div class="card">
                  <h3 id="lowerBody">Core</h3>
                </div>
              </a>
            </div>
            <div class="column">
              <div class="card">
                <h3 id="lowerBody">Upper Body</h3>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <h3 id="lowerBody">Cardio</h3>
              </div>
            </div>
          </div>
        </div>
        <div id="workoutOverviewInfo" style={{ display: "" }}>
          <div class="row"></div>
        </div>

        <div id="bottomControls">
          {" "}
          <button>
            {" "}
            <Link to="/blueprint" activeClassName="activeNav">
              {this.props.selectedWorkout}
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default MainPage;
