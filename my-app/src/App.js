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
      moreUsers: "",
    };
  }

  componentDidMount() {
    console.log("CDM Running");
    axios
      .get(`https://api.github.com/users/kdneldor`)
      .then((res) => {
        this.setState({ users: res.data });
        console.log(res.data);
        console.log(res.data.name);
        console.log(res.data.id);
        console.log(this.state);
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.users !== this.state.users) {
      console.log("Users have changed.");
    }
    if (prevState.moreUsers !== this.state.moreUsers) {
      console.log("State updated, users: ", this.state.moreUsers);
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
        <h1>GitHub Users</h1>
        <UserCard />
        {/* <div className="user-cards">
          {this.state.users.map((user) => (
            <img width="150" className="user" key={user} src={user} alt="" />
          ))}
          ;
        </div> */}
      </div>
    );
  }
}

export default App;
