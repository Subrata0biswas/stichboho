import React from "react";

// import component
import LoginComponent from "./loginComponent";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className="main-border">
          <div className="contact-container cms-con">
            <h2 className="title">Log in</h2>

            <div className="msg">
              If you have an account, sign in with your email address.
            </div>
            <LoginComponent />
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
