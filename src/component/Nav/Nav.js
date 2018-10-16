import React, { Component } from "react";
import "./NavStyle.css";
import editImg from "./edit.png";
import logout from "./logout.png";
import home from "./home.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LoggedInContext } from "../../Context/LoggedIn.js";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profilePicture: "",
      otherUsers: []
    };
  }

  componentDidMount() {
    const { profilePicture, username } = this.props.username;
    if (profilePicture && username) {
      this.setState({ username: username, profilePicture: profilePicture });
    }
  }

  render() {
    return (
      <div className="Nav">
        <img className="profile-pic" src={`https://robohash.org/${this.state.profilePicture}.png`} alt="avatar" />
        <p>{this.state.username}</p>
        <Link to="/dashboard">
          <img className="navIcon homeButton" src={home} alt="home" />
        </Link>

        <Link to="/new">
          <img className="navIcon newPostButton" src={editImg} alt="new post" />
        </Link>
        <Link to="/">
          <img className="navIcon logoutButton" src={logout} alt="logout" />
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { username, profilePicture } = state;

  return {
    username,
    profilePicture
  };
}

export default connect(mapStateToProps)(Nav);
