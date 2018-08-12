import React, { Component } from "react";
import Login, { PROVIDER_FACEBOOK, PROVIDER_GOOGLE, PROVIDER_KAKAO } from "../Pages/Login";


// static propTypes = {
//   OnSubmit: PropTypes.func,
//   OnExternalLogin: PropTypes.func, // (provider) => 0: facebook
// }

//library.add(fas.faStroopwafel);
//https://fontawesome.com/icons?d=gallery
export default class LoginSample extends Component {
  state = {
    log: "",
    submit: "",
  }
  onSubmit(obj) {
    this.setState({ submit: JSON.stringify(obj), log: "" });
  }

  onExternalLogin(provider) {
    this.setState({ submit: `provider is ${provider}!`, log: "" });
  }

  onCancel() {
    this.setState({ submit: "", log: "canceled" });
  }
  render() {
    return (
      <div>
        <Login OnCancel={(e) => this.onCancel()} OnSubmit={(obj) => this.onSubmit(obj)} OnExternalLogin={e => this.onExternalLogin(e)}></Login>
        <span>Login submit: {this.state.submit}</span><br />
        <span>Login log: {this.state.log}</span>
      </div>

    );
  }
}
