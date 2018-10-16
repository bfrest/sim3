import React, { Component } from "react";
import axios from "axios";
import "./FriendListStyle.css";

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPeople: []
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    axios.get("http://localhost:3001/api/friends").then(results => {
      this.setState({ listOfPeople: results.data });
    });
  }

  render() {
    return (
      <div className="recommendedList">
        <p>Recommended Friends</p>
        {this.state.listOfPeople.map(person => {
          return <p>{person.username}</p>;
        })}
      </div>
    );
  }
}

export default FriendsList;
