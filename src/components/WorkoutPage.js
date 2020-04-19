import React, { Component } from "react";
import CalfRaise from "../images/calfGif.gif";
import Video from "./video";
import { goToRoomInput } from "./goToRoomInput";

import { Icon, InlineIcon } from "@iconify/react";
import playIcon from "@iconify/icons-uil/play";
import { BrowserRouter as Router, Route } from "react-router-dom";
import checkmarkIcon from "@iconify/icons-gridicons/checkmark";
import { Link } from "react-router-dom";

var i = -1;

export class WorkoutPage extends Component {
  constructor(props) {
    super(props);

    this.localVideoref = React.createRef();
    this.remoteVideoref = React.createRef();
    this.state = {
      durationList: this.props.durations,
      workoutList: this.props.workoutExercises,
      linkList: this.props.linkList,
      currentLink: "",
      currentExercise: "",
      nextExercise: "",
      currentTime: 0,
      almostDone: false,
      inWorkout: false,
      states: 0,
      countdownCount: "",
      breakCount: 30,
      breakOn: false,
      finished: false,
      totalWorkoutTime: 0
    };
    this.startTime = this.startTime.bind(this);
    this.renderWorkoutTimes = this.renderWorkoutTimes.bind(this);
  }

  componentDidMount() {
    var self = this;
    setInterval(function() {
      if (self.state.currentExercise == undefined) {
        self.setState({
          finished: true
        });
      }
      if (self.state.currentTime <= 0) {
        i++;
        console.log("rendering here");
        self.setState({
          currentTime: self.state.durationList[i],
          nextExercise: self.state.workoutList[i + 1],
          currentExercise: self.state.workoutList[i],
          currentLink: self.state.linkList[i]
        });
      }
      var counterLast = document.getElementById("counterNumber");
      if (self.state.currentTime <= 5) {
        self.setState({
          almostDone: true,
          countdownCount: self.state.currentTime
        });
        // counterLast.innerHTML = counterLast;
      } else {
        self.setState({
          almostDone: false
        });
      }
    }, 1000);
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

  startTime() {
    this.setState(state => {
      return { inWorkout: !state.inWorkout };
    });
    console.log("hello deltay");
    if (this.state.inWorkout == true) {
      setInterval(
        () =>
          this.setState({
            currentTime: this.state.currentTime - 1,
            totalWorkoutTime: this.state.totalWorkoutTime + 1
          }),
        1000
      );
    }
  }

  renderWorkoutTimes = () => {
    var self = this;
    // this.state.durationList.map(currentDuration =>

    // );
  };

  render() {
    const durationList = this.props.durations.map(duration => (
      <li>{duration}</li>
    ));
    const listItems = this.props.workoutExercises.map(exercise => (
      <li>{exercise}</li>
    ));

    return (
      <div>
        <div style={{ display: this.state.finished == true ? "none" : "" }}>
          <Router>
            <React.Fragment>
              <div id="currentExerciseTitle">
                <h1>{this.state.currentExercise}</h1>
              </div>
              <Route path="/" exact component={goToRoomInput} />
              <Route path="/:roomId" exact component={Video} />
              <div id="animatedGif">
                <img src={this.state.currentLink}></img>
              </div>
              <button id="playIcon" onClick={() => this.startTime()}>
                <Icon icon={playIcon} />
              </button>
            </React.Fragment>
          </Router>
          {/* <div id="workoutTitle">
            {this.props.selectedWorkout} Workout!
            <h1>Next exercise:</h1>
            <h1>
              {this.state.currentExercise}: {this.state.currentTime}
            </h1>
            <h1>{this.state.nextExercise}</h1>
          </div> */}
          {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/c5Kv6-fnTj8?autoplay=1&controls=0&loop=1"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe> */}
          <div
            id="counterNumber"
            style={{ display: this.state.almostDone ? "block" : "none" }}
          >
            {/* {this.state.currentTime} */}
          </div>
          <div
            id="bottomControlsWorkout"
            style={{
              color: this.state.almostDone ? "red" : "black",
              fontSize: this.state.almostDone ? "red" : "black"
            }}
          >
            {" "}
            {/* <button onClick={() => this.startTime()}>
              <Icon icon={playIcon} />
            </button> */}
            {this.state.currentTime}
          </div>

          <div id="totalTimeWorkout">
            {" "}
            {/* Total Workout Time: <br></br>
            {this.state.totalWorkoutTime} */}
          </div>

          {/* <ul onClick={() => this.startTime()}>
          {listItems}, {durationList}
        </ul> */}
          {/* <video style={{ width: 250 }} ref={this.localVideoref} autoPlay></video>
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
        <div
          style={{ display: this.state.finished == true ? "inline" : "none" }}
        >
          <div id="completed">
            <Icon
              icon={checkmarkIcon}
              style={{ display: "inline-block", marginRight: "20px" }}
            />
            <div class="completeText" style={{ display: "inline-block" }}>
              You finished
            </div>
            <br></br>

            <Link to="/dashboard" activeClassName="activeNav">
              <button>Back To My Dashboard!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutPage;
