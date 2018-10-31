import React, { Component } from "react";
import axios from "axios";

class TESTCOMP extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      others: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:3001/api/friends").then(results => {
      this.setState({ others: [...results.data] });
    });
  }
  render() {
    const { others } = this.state;

    // if (others[0]) {
    //   let person = others[0];
    //   console.log(person.username);
    // }
    return (
      <div>
        <p>hello</p>
        {others.map(person => {
          let user = person;
          return <p>{user.username}</p>;
        })}
      </div>
    );
  }
}

export default TESTCOMP;
