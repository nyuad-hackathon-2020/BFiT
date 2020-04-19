// import React/, { Component } from "react";
import { Icon, InlineIcon } from "@iconify/react";
import starIcon from "@iconify/icons-typcn/star";
import calendarIcon from "@iconify/icons-oi/calendar";
import arrowRight from "@iconify/icons-el/arrow-right";
import timesIcon from "@iconify/icons-fa-solid/times";
import DateFnsUtils from "@date-io/date-fns";
import React, { useState, Component } from "react";
import UIPicker from "./UIPicker.js";
import $ from "jquery";

import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";

export class Friends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadedOut: false
    };
    this.fadeOut = this.fadeOut.bind(this);
  }
  fadeOut() {
    var fadeOutLocal = !this.state.fadedOut;
    this.setState({
      fadedOut: fadeOutLocal
    });
  }
  confirmSchedule() {
    $("#copiedToBoard").show();
    setTimeout(function() {
      $("#copiedToBoard").fadeOut("slow");
    }, 1500);
    var fadeOutLocal = !this.state.fadedOut;
    this.setState({
      fadedOut: fadeOutLocal
    });
  }

  render() {
    return (
      <div>
        <div id="friendsWelcome">
          <h1>Friends</h1>
        </div>
        <div
          id="friendsContainer"
          className={this.state.fadedOut ? "fadeModalPresent" : ""}
        >
          <div id="friendCard"></div>
          <div class="friends">
            <span class="dot"></span>
            <div class="className">Jeff</div>
            <div class="dateCompleted">
              <Icon
                icon={starIcon}
                style={{ marginRight: "7px", color: "yellow" }}
              />
              <Icon
                icon={calendarIcon}
                onClick={() => {
                  this.fadeOut();
                }}
              />
            </div>
          </div>
          <div class="friends">
            <span class="dot"></span>
            <div class="className">Dave</div>
            <div class="dateCompleted">
              <Icon icon={starIcon} style={{ marginRight: "7px", color: "" }} />
              <Icon
                icon={calendarIcon}
                className="calendarFriend"
                onClick={() => {
                  this.fadeOut();
                }}
              />
            </div>
          </div>
          <div class="friends">
            <span class="dot active"></span>
            <div class="className">Mohammed</div>
            <div class="dateCompleted">
              <Icon
                icon={starIcon}
                style={{ marginRight: "7px", color: "yellow" }}
              />
              <Icon
                icon={calendarIcon}
                className="calendarFriend"
                onClick={() => {
                  this.fadeOut();
                }}
              />
            </div>
          </div>
          <div class="friends">
            <span class="dot active"></span>
            <div class="className">Sarah</div>
            <div class="dateCompleted">
              <Icon
                icon={starIcon}
                style={{ marginRight: "7px", color: "yellow" }}
              />
              <Icon
                icon={calendarIcon}
                onClick={() => {
                  this.fadeOut();
                }}
              />
            </div>
          </div>
          <div class="friends">
            <span class="dot active"></span>
            <div class="className">John</div>
            <div class="dateCompleted">
              <Icon
                icon={starIcon}
                style={{ marginRight: "7px", color: "yellow" }}
              />
              <Icon
                icon={calendarIcon}
                onClick={() => {
                  this.fadeOut();
                }}
              />
            </div>
          </div>
        </div>
        <div id="copiedToBoard">Appointment Set!</div>

        <div
          class="calendar"
          style={{
            display: this.state.fadedOut == true ? "block" : "none"
          }}
        >
          <Icon
            icon={timesIcon}
            id="closeCalendar"
            onClick={() => {
              this.fadeOut();
            }}
          />
          <div
            id="acceptDate"
            onClick={() => {
              this.fadeOut();
            }}
            onClick={() => {
              this.confirmSchedule();
            }}
          >
            Verify
          </div>
          <UIPicker style={{ margin: "10px" }} />
          {/* <div class="calendar__picture">
            <h2>19, Sunday</h2>
            <h3>April</h3>
          </div>
          <div class="calendar__date">
            <div class="calendar__day">M</div>
            <div class="calendar__day">T</div>
            <div class="calendar__day">W</div>
            <div class="calendar__day">T</div>
            <div class="calendar__day">F</div>
            <div class="calendar__day">S</div>
            <div class="calendar__day">S</div>
            <div class="calendar__number"></div>
            <div class="calendar__number"></div>
            <div class="calendar__number"></div>
            <div class="calendar__number">1</div>
            <div class="calendar__number">2</div>
            <div class="calendar__number">3</div>
            <div class="calendar__number">4</div>
            <div class="calendar__number">5</div>
            <div class="calendar__number">6</div>
            <div class="calendar__number">7</div>
            <div class="calendar__number">8</div>
            <div class="calendar__number">9</div>
            <div class="calendar__number">10</div>
            <div class="calendar__number">11</div>
            <div class="calendar__number">12</div>
            <div class="calendar__number">13</div>
            <div class="calendar__number">14</div>
            <div class="calendar__number">15</div>
            <div class="calendar__number">16</div>
            <div class="calendar__number">17</div>
            <div class="calendar__number">18</div>
            <div class="calendar__number calendar__number--current">19</div>
            <div class="calendar__number">20</div>
            <div class="calendar__number">21</div>
            <div class="calendar__number">22</div>
            <div class="calendar__number">23</div>
            <div class="calendar__number">24</div>
            <div class="calendar__number">25</div>
            <div class="calendar__number">26</div>
            <div class="calendar__number">27</div>
            <div class="calendar__number">28</div>
            <div class="calendar__number">29</div>
            <div class="calendar__number">30</div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Friends;
