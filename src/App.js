import React, { Component } from "react";
import "./App.css";
import Nav from "./component/Nav/Nav.js";
import routes from "./routes.js";

class App extends Component {
  render() {
    //const currentPath = this.props.location.pathname;
    return (
      <div>
        {/*conditional render currentPath === "/" && <Nav />*/}
        <Nav />
        {routes}
        {console.log(this)}
      </div>
    );
  }
}

export default App;
