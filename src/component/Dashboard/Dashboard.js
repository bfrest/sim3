import React, { Component } from "react";
import "./DashboardStyle.css";
import axios from "axios";
import FriendsList from "../FriendList/Friendlist.js";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      searchFor: "",
      showMyPosts: true,
      posts: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMyPosts = this.handleMyPosts.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/api/posts`).then(results => {
      this.setState({ posts: [...results.data] });
    });
  }

  handleSearch(e) {
    this.setState({ searchFor: e.target.value });
  }

  handleMyPosts(e) {
    if (this.state.showMyPosts === true) {
      this.setState({ showMyPosts: false });
    } else {
      this.setState({ showMyPosts: true });
    }
  }

  render() {
    let checked;
    if (this.state.showMyPosts === true) {
      checked = true;
    } else {
      checked = false;
    }

    const posts = this.state.posts.map(post => {
      return (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.author_id}</p>
        </div>
      );
    });

    return (
      <div className="Dashboard">
        <input type="text" placeholder="Search by title" onChange={this.handleSearch} />
        <button>Search</button>
        <button>Reset</button>
        My Posts
        <input type="checkbox" defaultChecked="true" onClick={this.handleMyPosts} />
        <div className="posts">{posts}</div>
        <div className="friends">
          <FriendsList />
        </div>
      </div>
    );
  }
}

export default Dashboard;
