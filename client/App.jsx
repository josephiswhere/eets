import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
//import children
//import style sheets

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentChef: "dude",
      userList: [],
    };

    //function binds go here
  }
//   componentDidMount() {
//     fetch(`/api/users/${this.state.currentChef}`) //fetch info in subscribers -> then convert to json?
//       .then((res) => this.getUsers(res.users))
//       .catch((err) =>
//         console.log("App.componentDidMount: display users: ERROR: ", err)
//       );
//   }

  componentDidMount() {
    fetch(`/api/users/`, {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chef: this.state.currentChef
        })
    }) //fetch info in subscribers -> then convert to json?
      .then((res) => this.getUsers(res.users))
      .catch((err) =>
        console.log("App.componentDidMount: display users: ERROR: ", err)
      );
  }

  login(chef) {
    this.setState({ currentChef: chef });
  }

  getUsers(users) {
    this.setState({ userList: users });
  }

  render() {
    //could use switch for multiple pages
    //great components for login and userlist
    return (
      <section className="mainSection">
        <header className="appHeader">
          <h1>APP RENDERING</h1>
        </header>
        <div className="login"></div>
        <div className="userList"></div>
      </section>
    );
  }
}

export default App;
