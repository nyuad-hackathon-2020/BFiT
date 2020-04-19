import React, { Component } from "react";
import Video from "./components/video";
import "./App.css";
import "./styles/video.css";
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
      exerciseList: [],
      durationList: []
    };

    this.selectedBodyPart = this.selectedBodyPart.bind(this);
  }

  selectedBodyPart = bodyPart => {
    const self = this;
    const newArr = [];

    this.setState({
      currentBodyPart: bodyPart,
      exerciseList: [],
      durationList: []
    });

    const preObject = document.getElementById("workoutOverviewInfo");
    document.getElementById("workoutOverviewInfo").innerHTML = "";
    console.log(this.state.currentBodyPart);

    const rootRef = firebase
      .database()
      .ref()
      .child(this.state.currentBodyPart);

    const bodyWorkout = rootRef.child("Lose Weight");
    bodyWorkout.on("value", snap => {
      const tempexerciselist = [];
      const tempdurationlist = [];

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
          durationList: tempdurationlist
        });

        li.innerText = exerciseName + ": " + duration;
        preObject.appendChild(li);
      });
    });
  };

  componentDidMount() {
    const peerConfig = null;
    this.pc = new RTCPeerConnection(peerConfig);
    const contraints = { video: true };

    function gotData(data) {
      console.log(data);
    }

    function errData(err) {
      console.log(err);
    }

    // const speedRef = rootRef.child("speed");
    // rootRef.on("value", snap => {
    //   console.log(snap.val());
    //   this.setState({
    //     speed: snap.val()
    //   });
    // });

    this.pc.onicecandidate = e => {
      if (e.candidate) console.log(JSON.stringify(e.candidate));
    };

    this.pc.oniceconnectionstatechange = e => {
      console.log(e);
    };

    this.pc.ontrack = e => {
      this.remoteVideoref.current.srcObject = e.streams[0];
    };

    const success = stream => {
      this.localVideoref.current.srcObject = stream;
      this.pc.addStream(stream);
    };

    const failure = e => {
      console.log("Error occurred!", e);
    };

    navigator.mediaDevices
      .getUserMedia(contraints)
      .then(success)
      .catch(failure);
  }

  createOffer = () => {
    this.pc.createOffer({ offerToReceiveVideo: 1 }).then(
      sdp => {
        console.log(JSON.stringify(sdp));
        this.pc.setLocalDescription(sdp);
      },
      e => {}
    );
  };

  setRemoteDescription = () => {
    const desc = JSON.parse(this.textref.value);

    this.pc.setRemoteDescription(new RTCSessionDescription(desc));
  };

  createAnswer = () => {
    console.log("answer");
    this.pc.createAnswer({ offerToReceiveVideo: 1 }).then(
      sdp => {
        console.log(JSON.stringify(sdp));
        this.pc.setLocalDescription(sdp);
      },
      e => {}
    );
  };

  addCandidate = () => {
    const candidate = JSON.parse(this.textref.value);
    console.log("adding candidates", candidate);

    this.pc.addIceCandidate(new RTCIceCandidate(candidate));
  };

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
                  durations={this.state.durationList}
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
