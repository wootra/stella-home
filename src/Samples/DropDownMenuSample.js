import React, { Component } from "react";
import DropDownMenu from "../components/DropDownMenu";

//library.add(fas.faStroopwafel);
//https://fontawesome.com/icons?d=gallery
export default class DropDownMenuSample extends Component {
  state = {
    eventLog: "[event log]"
  };

  OnMenuClicked(index, id) {
    this.setState({
      eventLog: `drop down menu index ${index} of ${id} is clicked!`
    });
  }

  render() {
    let list = [
      { icon: "concierge-bell", text: "Login to Table - 1" },
      { icon: "concierge-bell", text: "Be A Super Host - 2" },
      { icon: "file-signature", text: "Join The Table - 3" },
      { icon: "user-friends", text: "Invite a Friend - 4" }
    ];

    return (
      <div className="container-fluid">
        {this.state.eventLog}
        <DropDownMenu id="a" class="btn-primary" style={{ width: "100%" }}>
          <span style={{ color: "red" }}>Hey, Default</span>
        </DropDownMenu>
        <DropDownMenu id="b" list={list} class="btn-secondary btn-sm">
          list change
        </DropDownMenu>
        <DropDownMenu
          id="c"
          OnMenuClicked={(id, idx) => this.OnMenuClicked(id, idx)}
          class="btn-success btn-block"
        >
          event handler
        </DropDownMenu>
        <DropDownMenu id="d" class="btn-primary" collapseWhenMenuClick={false}>
          No collapse when click
        </DropDownMenu>
        <DropDownMenu
          id="e"
          class="btn-primary"
          icon="address-book"
          collapseWhenMenuClick={false}
        >
          diffrent icon
        </DropDownMenu>
        <DropDownMenu
          id="f"
          class="btn-primary"
          icon={false}
          collapseWhenMenuClick={false}
        >
          No Icon
        </DropDownMenu>
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Bootstrap Dropdown
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div >
    );
  }
}
