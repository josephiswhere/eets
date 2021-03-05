import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class ChefLogin extends Component {
  render() {
    return (
      <section className="chefLogin">
        <div>
          <h3>Welcome {this.props.currentChef}</h3>
        </div>
        <div>
          <input
            name="chef"
            placeholder="Chef User Name"
            value={this.props.chefLogin}
            onChange={this.props.handleChefInput}
          />
          <button
            type="button"
            className="primaryButton"
            onClick={() => this.props.loginChef(this.props.chefLoginText)}
          >
            Login
          </button>
        </div>
      </section>
    );
  }
}

export default ChefLogin;
