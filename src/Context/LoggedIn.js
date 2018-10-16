import React, { Component } from "react";
export const LoggedInContext = React.createContext();

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      id: 0,
      profilePic: "",
      friendsList: []
    };
  }
  render() {
    return <LoggedInContext.Provider value={{ state: this.state }}>{this.props.children}</LoggedInContext.Provider>;
  }
}

export default LoggedIn;