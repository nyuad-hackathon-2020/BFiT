import "../App.css";
import { Icon, InlineIcon } from "@iconify/react";
import barsIcon from "@iconify/icons-fa/bars";
import dashboardIcon from "@iconify/icons-il/dashboard";
import { Link } from "react-router-dom";

import React, { Component } from "react";

export class Toolbar extends Component {
  expand = () => {
    var x = document.getElementById("myTopnav");
    console.log("hello!");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  render() {
    return (
      <div>
        <div class="topnav" id="myTopnav">
          <a href="/">Professional Trainer</a>
          <div class="topnav-right">
            <Icon
              icon={barsIcon}
              href="javascript:void(0);"
              className="barIcon"
              activeClassName="activeNav"
              onClick={() => this.expand()}
            />
            <a href="/" activeClassName="activeNav">
              About
            </a>
            <a href="/" activeClassName="activeNav">
              Contact
            </a>
            {/* <a href="/" activeClassName="activeNav"></a> */}

            <Link to="/dashboard" activeClassName="activeNav">
              <Icon icon={dashboardIcon} />
              Dashboard{" "}
            </Link>
            <Link to="/dashboard" activeClassName="activeNav">
              Friends{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
