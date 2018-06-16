import React, { Component } from "react";
import { Redirect } from "react-router";
import { connect } from "react-redux";
import axios from "axios";
import { logIn } from "../../ducks/reducer.js";
import AuthStyle from "./AuthStyle.css";
import ufo from "./ufo.png";

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
    this.register = this.register.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
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

  register() {
    const { username, password } = this.state;
    // this sets the state to of toDashboard to true if the register is successfull so it can redirect to the dashboard
    axios.post("http://localhost:3001/api/register", { username, password }).then(this.setState({ toDashboard: true }));
  }

  attemptLogin() {
    const { username, password } = this.state;
    // this is a post request because you need to be able to get the info from the bosy instead of putting it in the query parameter

    axios.post("http://localhost:3001/api/login", { username, password }).then(result => {
      // ! I think this is how to invoke the action creater
      const { id, username, profile_picture } = result.data;
      logIn(id, username, profile_picture);
      this.setState({ toDashboard: true });
    });
  }

  render() {
    if (this.state.toDashboard === true) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <div className="Auth">
        <form className="authForm">
          <img className="logo" src={ufo} alt="Logo" />
          <h1 className="authHeader" />

          <div className="usernameContainer">
            <label for="username" className="usernameLabel">
              Username:
            </label>
            <input className="authInput" type="text" onChange={this.handleUsername} />
          </div>

          <div className="passwordContainer">
            <label for="password">Password:</label>
            <input className="authInput" type="password" onChange={this.handlePassword} />
          </div>

          <div className="authButtonContainer">
            <button className="authButton" onClick={this.attemptLogin}>
              Login
            </button>
            <button className="authButton" onClick={this.register}>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { logIn }
)(Auth);
