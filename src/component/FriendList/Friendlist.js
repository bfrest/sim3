import React, { Component } from "react";
import axios from "axios";
import "./FriendListStyle.css";
import { LoggedInContext } from "../../Context/LoggedInProvider.js";

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPeople: [],
      recommendedList: []
    };
    this.getAllUsers = this.getAllUsers.bind(this);
    this.filterFriends = this.filterFriends.bind(this);
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    axios.get("http://localhost:3001/api/friends").then(results => {
      this.setState({ listOfPeople: results.data });
    });
  }

  filterFriends() {
    // this is possibly where we will
    // sort the array of recommended friends
  }

  render() {
    return (
      <div className="recommendedList">
        <LoggedInContext.Consumer>
          {context => (
            <React.Fragment>
              <h3>{context.state.userName}</h3>
            </React.Fragment>
          )}
        </LoggedInContext.Consumer>
        <p>Recommended Friends</p>
        {// we will output and limit the array to 5 here
        this.state.listOfPeople.map(person => {
          return <p key={person.id}>{person.username}</p>;
        })}
      </div>
    );
  }
}

export default FriendsList;
