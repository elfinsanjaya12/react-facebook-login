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

  responseFacebook = response => {
    console.log(response);
  };
  componentClicked = () => console.log("clicked");
  render() {
    let fbContent;
    if (this.state.isLoggedIin) {
      fbContent = null;
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
    return <div>{fbContent}</div>;
  }
}

export default Facebook;
