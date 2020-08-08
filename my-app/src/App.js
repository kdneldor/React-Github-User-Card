import React from "react";
import axios from "axios";
import "./App.css";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      users: [],
      followers: [],
    };
  }

  componentDidMount() {
    console.log("CDM Running");
    //axios grabbing user data
    axios
      .get(`https://api.github.com/users/kdneldor`)
      .then((res) => {
        this.setState({ users: res.data });
        console.log(res.data);
        console.log(this.state.users);
        console.log(this.state.users.id);
      })
      .catch((err) => console.log(err));
    //axios grabbing followers endpoint
    axios
      .get(`https://api.github.com/users/kdneldor/followers`)
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.users !== this.state.users) {
      console.log("Users have changed.");
    }
    if (prevState.followers !== this.state.followers) {
      console.log("State updated, users: ", this.state.followers);
    }
  }

  // fetchMoreUsers = () => {
  //   axios
  //     .get(`https://api.github.com/users/${users}`)
  //     .then((res) => {
  //       this.setState({users: res.data})
  //     })
  //     .catch((err) => console.log(err))
  // }

  handleChanges = (e) => {
    console.log("handleChanges called");
    this.setState({
      ...this.state,
      moreUsers: e.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="usercard-title">GitHub UserCard</h1>
        <UserCard
          key={this.state.users.id}
          name={this.state.users.name}
          location={this.state.users.location}
          bio={this.state.users.bio}
          pic={this.state.users.avatar_url}
          followers={this.state.users.followers}
        />
        {/* {this.state.users.map((user) => {
          return <UserCard name={this.state.users.name} key={user} />;
        })}
        , */}
      </div>
    );
  }
}

export default App;
