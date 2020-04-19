import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA08_-xo9085AreoVeS-izrlpz3ofIx3AE",
  authDomain: "hackathonproject-c1b7f.firebaseapp.com",
  databaseURL: "https://hackathonproject-c1b7f.firebaseio.com",
  projectId: "hackathonproject-c1b7f",
  storageBucket: "hackathonproject-c1b7f.appspot.com",
  messagingSenderId: "501096596018",
  appId: "1:501096596018:web:c84538b78aa12aa5c5f22b",
  measurementId: "G-4532N265C1"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
