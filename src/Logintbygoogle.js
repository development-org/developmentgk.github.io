import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';

export class Logintbygoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // this.signup = this
    //   .signup
    //   .bind(this);
  }
  signup(res) {
    const googleresponse = {
      Name: res.profileObj.name,
      email: res.profileObj.email,
      token: res.googleId,
      Image: res.profileObj.imageUrl,
      ProviderId: 'Google'
    };
    sessionStorage.setItem("userData", JSON.stringify(googleresponse));
    this.props.history.push('/Dashboard')
  };
  render() {
    const responseGoogle = (response) => {
      //console.log(response);
      var res = response.profileObj;
      //console.log(res);
      sessionStorage.setItem("userData", JSON.stringify(res));
      this.props.history.push('/Dashboard')
      //debugger;
      //this.signup(response);
    }
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 btn btn-info">

            </div>
        </div>
        <div className="row">
          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">
            <div className="col-sm-4"></div>
            <div className="col-sm-4">
              <GoogleLogin
                clientId="909656245457-q9ad4msrpd6p6loqslpm4kjd3a35mma2.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} ></GoogleLogin>
            </div>
            <div className="col-sm-4"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default Logintbygoogle