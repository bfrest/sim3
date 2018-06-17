import React, { Component } from "react";
import DashboardStyle from "./DashboardStyle.css";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      searchFor: "",
      showMyPosts: true
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMyPosts = this.handleMyPosts.bind(this);
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
    return (
      <div className="Dashboard">
        <input type="text" placeholder="Search by title" onChange={this.handleSearch} />
        <button>Search</button>
        <button>Reset</button>
        My Posts<input type="checkbox" checked={checked} onClick={this.handleMyPosts} />
        {console.log(this.state.showMyPosts)}
      </div>
    );
  }
}

export default Dashboard;
