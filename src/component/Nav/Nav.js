import React, { Component } from "react";
import "./NavStyle.css";
import editImg from "./edit.png";
import logout from "./logout.png";
import home from "./home.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profilePicture: "",
      id: 0,
      friendsList: [],
      otherUsers: []
    };
  }

  componentDidMount() {
    const { profilePicture, username } = this.props.username;
    if (profilePicture && username) {
      this.setState({ username: username, profilePicture: profilePicture });
    }
  }

  getAllData() {
    // ! I think thats how to do the query
    axios.get(`/api/userInfo?id=17`).then(results => {
      console.log(results.data);
    });
  }

  render() {
    const { username, id, profilePicture } = this.props.profilePicture;

    return (
      <div className="Nav">
        {console.log(this.props.profilePicture.id)}
        <img className="profile-pic" src={profilePicture} alt="avatar" />
        <h2>{username}</h2>

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
