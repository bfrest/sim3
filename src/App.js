import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav/Nav.js";
import routes from "./routes.js";
import { withRouter } from "react-router";
import { LoggedInContext } from "./Context/LoggedIn";

class App extends Component {
  render() {
    // gets the current path to make nav hidden if auth is the current component being rendered
    const currentPath = this.props.location.pathname === "/";
    let showNav;
    if (currentPath === false) {
      showNav = <Nav />;
    }

    return (
      <div className="App">
        {showNav}
        {routes}
      </div>
    );
  }
}

// withRouter() helps get the pathname from the url to conditonally render the nav
export default withRouter(App);
