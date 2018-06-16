import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = props => {
  return (
    <div>
      <p>this is {props.username}</p>
      <p>This is the nav</p>
      <Link to="/dashboard">
        <button>Home</button>
      </Link>

      <Link to="/new">
        <button>New Post</button>
      </Link>
      <Link to="/">
        <button>Logout</button>
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
