import React from "react";
import NavStyle from "./NavStyle.css";
import editImg from "./edit.png";
import logout from "./logout.png";
import home from "./home.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = props => {
  return (
    <div className="Nav">
      <p>This will be th username</p>
      <p>This will be th profile pic</p>
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
};

function mapStateToProps(state) {
  const { username, profilePicture } = state;

  return {
    username,
    profilePicture
  };
}

export default connect(mapStateToProps)(Nav);
