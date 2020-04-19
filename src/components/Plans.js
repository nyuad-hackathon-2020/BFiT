import React, { Component } from "react";
import bgPlanPage from "../images/bgPlanPage.jpg";

export class Plans extends Component {
  render() {
    return (
      <div>
        <div id="jumboImage">
          <img src={bgPlanPage} alt="" />
          <div id="wrapMessage">
            <div class="jumboText" id="planHeader">
              BFit's Online Training Plans
            </div>
          </div>
        </div>
        <div class="rowPlan">
          <div class="columnPlan">
            <h1>Standard Membership</h1>
            <h4>Schedule And Complete Workouts With Friends</h4>
            <h4>Keep Track Of Completed Workouts</h4>
            <h4>
              Access To <em>Free Workouts</em>
            </h4>
            <h2 style={{ fontSize: "60px" }}>Free</h2>
          </div>
          <div class="columnPlan" id="leftBorder">
            <h1>KFit+</h1>
            <h4>Custom Plans Based On Your Fitness Goals</h4>
            <h4>One-on-One Consulations With Trainers</h4>
            <h4>
              Access To <em>Premium Workouts</em>
            </h4>
            <h2 style={{ sfontSize: "60px" }}>
              <span style={{}} style={{ fontSize: "15px" }}>
                $
              </span>
              9.99{" "}
            </h2>
          </div>
        </div>
        s
      </div>
    );
  }
}

export default Plans;
