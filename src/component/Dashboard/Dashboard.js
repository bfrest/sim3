import React, { Component } from "react";
import DashboardStyle from "./DashboardStyle.css";
import axios from "axios";

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
      console.log(this.state.posts);
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
        <div>
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
        My Posts<input type="checkbox" checked={checked} onClick={this.handleMyPosts} />
        {posts}
      </div>
    );
  }
}

export default Dashboard;
