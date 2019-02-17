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
    this.setState({
      isLoggedIin: true,
      userId: response.id,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };
  componentClicked = () => console.log("clicked");
  render() {
    let fbContent;
    if (this.state.isLoggedIin) {
      fbContent = (
        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h3>Welcome, {this.state.name}</h3>
          <p>Email: {this.state.email}</p>
          <p>{this.state.userId}</p>
        </div>
      );
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
