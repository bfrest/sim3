import React, { Component } from "react";
import "./NavStyle.css";
import editImg from "./edit.png";
import logout from "./logout.png";
import home from "./home.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import FriendsList from "../FriendList/Friendlist.js";

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
    this.getFriends = this.getFriends.bind(this);
  }

  componentDidMount() {
    const { profilePicture, username, id } = this.props.username;
    if (profilePicture && username) {
      this.setState({ username: username, profilePicture: profilePicture });
    }
    this.getFriends(id);
  }

  getFriends(id) {
    axios.get(`http://localhost:3001/api/getFriends?id=${id}`).then(results => {
      this.setState({
        friendsList: [...results.data[0].friend1, results.data[0].friend2, results.data[0].friend3, results.data[0].friend4, results.data[0].friend5]
      });
    });
  }

  render() {
    const { username, id, profilePicture } = this.props.profilePicture;

    return (
      <div className="Nav">
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
        <div className="friends">
          <FriendsList id={id} listOfFriends={this.state.friendsList} />
        </div>
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
