import React, { Component } from "react";
import axios from "axios";
import "./FriendListStyle.css";

class FriendsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfPeople: [],
      friends: [],
      showFriends: []
    };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers() {
    axios.get("http://localhost:3001/api/friends").then(results => {
      this.setState({ listOfPeople: [...results.data] });
    });
  }

  render() {
    const user = this.props.userId;
    const recommendedList = [...this.state.listOfPeople];
    const friendsList = [...this.props.listOfFriends, this.props.id];

    //loops the users friends array
    for (let i = 0; i < friendsList.length; i++) {
      // loops over the list of all the people in a database
      for (let j = 0; j < recommendedList.length; j++) {
        if (friendsList[i] === recommendedList[j].id) {
          // takes away the person from the array if the
          // person in already on the friends list
          recommendedList.splice(j, 1);
        }
      }
    }

    // gets the first 5 from the sorted list of users to display recommended friends
    const recommended = [recommendedList[0], recommendedList[1], recommendedList[2], recommendedList[3], recommendedList[4]];
    let listOfPeeps;

    // display the list of recommended friends
    if (recommended[0] !== undefined) {
      listOfPeeps = recommended.map(person => {
        return <p>{person.username}</p>;
      });
    } else {
      listOfPeeps = "";
    }

    return (
      <div className="recommendedList">
        <p>Recommended Friends</p>
        {listOfPeeps}
      </div>
    );
  }
}

export default FriendsList;
