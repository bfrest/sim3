import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      toDashboard: false
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  handleUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  createUser() {
    const { username, password } = this.state;
    // this sets the state to of toDashboard to true if the register is successfull so it can redirect to the dashboard
    axios.post("http://localhost:3001/api/register", { username, password }).then(this.setState({ toDashboard: true }));
  }

  attemptLogin() {
    const { username, password } = this.state;
    axios.post("http://localhost:3001/api/login", { username, password }).then(this.setState({ toDashboard: true }));
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <input className="usernameInput" type="text" placeholder="Username" onChange={this.handleUsername} />

        <input className="passwordInput" type="text" placeholder="Password" onChange={this.handlePassword} />

        <button>Login</button>
        <button onClick={this.createUser}>Register</button>
      </div>
    );
  }
}

export default Auth;
