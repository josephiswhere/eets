import React, { Component } from "react";
// const fs = require('fs');
import { Switch, Route } from "react-router-dom";
//import children
import ChefLogin from "./ChefLogin";
import chefUserList from "./ChefUserList";
//import style sheets

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentChef: "dude",
      chefLogin:'login',
      userList: [],
    };

    //function binds go here
    this.loginChef = this.loginChef.bind(this)
    this.handleChefInput = this.handleChefInput.bind(this)

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
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        chef: `${this.state.currentChef}`,
      },
      // body: JSON.stringify({
      //     chef: this.state.currentChef
      // })
    })
      .then((res) => res.json())
      .then((res) => this.displayUsers(res.users))
      .catch((err) =>
        console.log("App.componentDidMount: display users: ERROR: ", err)
      );
  }

  loginChef(chef) {
    this.setState({ currentChef: chef });
  }

  handleChefInput(e) {
    const { value } = e.target;
    this.setState({ chefLogin: value });
  }

  displayUsers(users) {
    this.setState({ userList: users });
  }

  render() {
    //could use switch for multiple pages
    //great components for login and userlist
    const chefLogin = (
      <ChefLogin
        currentChef={this.state.currentChef}
        chefLoginText={this.state.chefLogin}
        loginChef={this.loginChef}
        handleChefInput={this.handleChefInput}
      />
    )
    return (
      <section className="mainSection">
        <header className="appHeader">
          <h1>APP RENDERING</h1>
        </header>
        <div className="login">
          {chefLogin}
        </div>
        <div className="userList">{this.state.userList}</div>
      </section>
    );
  }
}

export default App;
