import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  state = {
    isLoggedIin: false,
    userId: "",
    name: "",
    email: "",
    picture: ""
  };
  render() {
    let fbContent;
    if (this.state.isLoggedIin) {
    } else {
      fbContent = (
        <FacebookLogin
          appId="2062990703782378"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div />;
  }
}

export default Facebook;
