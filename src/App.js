import React, { Component } from "react";
import Video from "./components/video";
import "./App.css";
import "./styles/video.css";
import Friends from "./components/Friends";

import Toolbar from "./components/Toolbar.js";
import MainPage from "./components/MainPage.js";
import WorkoutPage from "./components/WorkoutPage.js";
import Dashboard from "./components/Dashboard.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { goToRoomInput } from "./components/goToRoomInput";
import * as firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);

    this.localVideoref = React.createRef();
    this.remoteVideoref = React.createRef();
    this.state = {
      currentBodyPart: " ",
      currentBodyPartLinks: " ",
      exerciseList: [],
      durationList: [],
      linkList: [],
      hasSelected: false
    };

    this.selectedBodyPart = this.selectedBodyPart.bind(this);
  }

  selectedBodyPart = bodyPart => {
    const self = this;
    const newArr = [];

    this.setState({
      currentBodyPart: bodyPart,
      exerciseList: [],
      durationList: [],
      linkList: []
    });

    const preObject = document.getElementById("workoutOverviewInfo");
    // document.getElementById("workoutOverviewInfo").innerHTML = "";

    const linkList = firebase
      .database()
      .ref()
      .child(this.state.currentBodyPart + "links");

    const rootRef = firebase
      .database()
      .ref()
      .child(this.state.currentBodyPart);

    linkList.on("value", snap => {
      const tempLinkList = [];

      snap.forEach(function(child) {
        var link = child.val();
        tempLinkList.push(link);
        console.log(link);
        self.setState({
          linkList: tempLinkList
        });
      });
    });

    const bodyWorkout = rootRef.child("Lose Weight");
    bodyWorkout.on("value", snap => {
      const tempexerciselist = [];
      const tempdurationlist = [];
      const tempLinkList = [];

      snap.forEach(function(child) {
        const li = document.createElement("h1");
        li.className = "aClassName";

        console.log(child.val());
        var exerciseName = child.key;
        var duration = child.val();
        tempexerciselist.push(exerciseName);
        tempdurationlist.push(duration);

        self.setState({
          exerciseList: tempexerciselist,
          durationList: tempdurationlist,
          hasSelected: true
        });

        li.innerText = exerciseName + ": " + duration;
        // preObject.appendChild(li);
      });
    });
  };

  componentDidMount() {
    const self = this;

    const rootRef = firebase
      .database()
      .ref()
      .child(this.state.currentBodyPart);
    const bodyWorkout = rootRef.child("Lose Weight");
    bodyWorkout.on("value", snap => {
      const tempexerciselist = [];
      const tempdurationlist = [];
      const tempLinkList = [];

      snap.forEach(function(child) {
        const li = document.createElement("h1");
        li.className = "aClassName";

        console.log(child.val());
        var exerciseName = child.key;
        var duration = child.val();
        tempexerciselist.push(exerciseName);
        tempdurationlist.push(duration);

        self.setState({
          exerciseList: tempexerciselist,
          durationList: tempdurationlist,
          hasSelected: true
        });

        li.innerText = exerciseName + ": " + duration;
        // preObject.appendChild(li);
      });
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Toolbar />
          <Route
            exact
            path="/blueprint"
            render={props => (
              <React.Fragment>
                {" "}
                <WorkoutPage
                  selectedWorkout={this.state.currentBodyPart}
                  workoutExercises={this.state.exerciseList}
                  linkList={this.state.linkList}
                  durations={this.state.durationList}
                  hasSelected={this.state.hasSelected}
                />
              </React.Fragment>
            )}
          />
          {/* <ul id="fbTest"></ul> */}

          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                {" "}
                <MainPage
                  selectedBodyPart={this.selectedBodyPart}
                  selectedWorkout={this.state.currentBodyPart}
                  hasSelected={this.state.hasSelected}
                />{" "}
              </React.Fragment>
            )}
          />

          <Route
            exact
            path="/dashboard"
            render={props => (
              <React.Fragment>
                {" "}
                <Dashboard />{" "}
              </React.Fragment>
            )}
          />
          <Route
            exact
            path="/friends"
            render={props => (
              <React.Fragment>
                {" "}
                <Friends />{" "}
              </React.Fragment>
            )}
          />
          {/* <video
            style={{ width: 250 }}
            ref={this.localVideoref}
            autoPlay
          ></video>
          <video
            style={{ width: 250 }}
            ref={this.remoteVideoref}
            autoPlay
          ></video>
          <button onClick={this.createOffer}>Offer</button>
          <button onClick={this.createAnswer}>Answer</button>
          <br></br>
          <textarea
            ref={ref => {
              this.textref = ref;
            }}
          />
          <br></br>
          <button onClick={this.setRemoteDescription}>
            Set Remote Description
          </button>
          <button onClick={this.addCandidate}>Add Candidate</button> */}
        </div>
      </Router>
    );
  }
}

export default App;
