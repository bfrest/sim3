import React, { Component } from "react";
export const LoggedInContext = React.createContext();

class LoggedInProvider extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      id: 0,
      profilePic: "",
      friendsList: [],
      getLogged: (username, id, profilePic) => {
        this.setState({ username: username, id: id, profilePic: profilePic });
        console.log(this.state);
      }
    };
    // this.getLoggedIn = this.getLoggedIn.bind(this);
  }

  // getLoggedIn(username, id, profilePic) {
  //   if (this.state.username === "") {
  //     this.setState({ username: username, id: id, profilePic: profilePic });
  //     console.log(username, id, profilePic);
  //   } else {
  //     return;
  //   }
  // }

  render() {
    return <LoggedInContext.Provider value={{ state: this.state, getLoggedIn: this.getLoggedIn }}>{this.props.children}</LoggedInContext.Provider>;
  }
}

export default LoggedInProvider;
