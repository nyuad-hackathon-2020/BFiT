import React from "react";
import UserImage from "../images/user.jpg";
import { Icon, InlineIcon } from "@iconify/react";
import starIcon from "@iconify/icons-typcn/star";
import calendarIcon from "@iconify/icons-oi/calendar";

export default function Dashboard() {
  return (
    <div>
      <div id="dashboardWelcome">
        <h1>Hello Johnny!</h1>
        <hr></hr>
        <h3>Dashboard</h3>
      </div>
      <div id="" class="dashboard">
        <div class="row">
          <div class="column">
            <div class="card">
              <img src={UserImage} style={{ borderRadius: "50%" }}></img>
              <h3>Johnny</h3>
              <hr style={{ margin: "auto 40px" }}></hr>
              <h3 style={{ fontWeight: "300" }}>Member Since: 03/14/2020</h3>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 id="alignLeft">Workouts Completed:</h3>
              <div class="classCompleted">
                <div class="className">Complete Core</div>
                <div class="dateCompleted">4/10/2020</div>
              </div>
              <div class="classCompleted">
                <div class="className">Lower Body</div>
                <div class="dateCompleted">4/08/2020</div>
              </div>
              <div class="classCompleted">
                <div class="className">Abs (Beginners)</div>
                <div class="dateCompleted">4/03/2020</div>
              </div>
              <div class="classCompleted">
                <div class="className">Cardio Blaster</div>
                <div class="dateCompleted">4/01/2020</div>
              </div>
              <div class="classCompleted">
                <div class="className">Complete Core</div>
                <div class="dateCompleted">4/10/2020</div>
              </div>
              <div class="classCompleted">
                <div class="className">Lower Body</div>
                <div class="dateCompleted">4/08/2020</div>
              </div>
              <div class="classCompleted">
                <div class="className">Lower Body</div>
                <div class="dateCompleted">4/03/2020</div>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3 id="alignLeft">Friends:</h3>
              <div class="friends">
                <div class="className">Jeff</div>
                <div class="dateCompleted">
                  <Icon
                    icon={starIcon}
                    style={{ marginRight: "7px", color: "yellow" }}
                  />
                  <Icon icon={calendarIcon} />
                </div>
              </div>
              <div class="friends">
                <div class="className">Sarah</div>
                <div class="dateCompleted">
                  <Icon icon={starIcon} style={{ marginRight: "7px" }} />
                  <Icon icon={calendarIcon} />
                </div>
              </div>
              <div class="friends">
                <div class="className">Dave</div>
                <div class="dateCompleted">
                  <Icon icon={starIcon} style={{ marginRight: "7px" }} />
                  <Icon icon={calendarIcon} />
                </div>
              </div>
              <div class="friends">
                <div class="className">Mohammed </div>
                <div class="dateCompleted">
                  <Icon icon={starIcon} style={{ marginRight: "7px" }} />
                  <Icon icon={calendarIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="dashboardWelcome">
        <h3>Recommended Workouts</h3>
      </div>
      <div id="" class="recWorkoutsDashboard">
        <div class="row">
          <div class="column">
            <div class="card">
              <h3>Complete Core</h3>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <h3>Cardio Blaster II</h3>
            </div>
          </div>
          <div class="column">
            <div class="card">
              {" "}
              <h3>Abs (Intermediate)</h3>
            </div>
          </div>
          <div class="column">
            <div class="card">
              {" "}
              <h3>Lower Body</h3>
            </div>
          </div>
          <div class="column">
            <div class="card">
              {" "}
              <h3>Pilates</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
