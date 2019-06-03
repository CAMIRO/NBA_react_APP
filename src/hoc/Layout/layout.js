import React, { Component } from "react";
import "./layout.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";

export default class layout extends Component {
  state = {
    showNav: false
  };

  togglesidenav = action => {
    this.setState({
      showNav: action
    });
  };

  render() {
    //console.log(this.props)
    return (
      <div>
        <Header
          showNav={this.state.showNav}
          onHideNav={() => this.togglesidenav(false)}
          onOpenNav={() => this.togglesidenav(true)}
        />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
