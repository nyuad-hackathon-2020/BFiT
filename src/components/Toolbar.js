import "../App.css";
import { Icon, InlineIcon } from "@iconify/react";
import barsIcon from "@iconify/icons-fa/bars";
import dashboardIcon from "@iconify/icons-il/dashboard";
import { Link } from "react-router-dom";
import BFitLogo from "../images/bfitLogo.jpg";
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
          <a href="/">
            <img src={BFitLogo} style={{ width: "80px" }} id="logo"></img>
          </a>
          <div class="topnav-right">
            <Icon
              icon={barsIcon}
              href="javascript:void(0);"
              className="barIcon"
              activeClassName="activeNav"
              onClick={() => this.expand()}
            />
            <a href="/" activeClassName="activeNav" className="links">
              About
            </a>
            <a href="/" activeClassName="activeNav" className="links">
              Contact
            </a>
            {/* <a href="/" activeClassName="activeNav"></a> */}

            <Link to="/dashboard" activeClassName="activeNav" className="links">
              <Icon icon={dashboardIcon} />
              &nbsp;&nbsp;&nbsp;Dashboard{" "}
            </Link>
            <Link to="/friends" activeClassName="activeNav" className="links">
              Friends{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
