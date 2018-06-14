import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
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
    axios
      .post("http://localhost3001/api/register", {
        username,
        password
      })
      .then(<Redirect to="/dashboard" />);
  }

  render() {
    return (
      <div>
        <input
          className="usernameInput"
          type="text"
          placeholder="Username"
          onChange={this.handleUsername}
        />

        <input
          className="passwordInput"
          type="text"
          placeholder="Password"
          onChange={this.handlePassword}
        />

        <button>Login</button>
        <button onClick={this.createUser}>Register</button>
      </div>
    );
  }
}

export default Auth;
