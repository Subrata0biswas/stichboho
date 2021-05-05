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
        <div class="main-border">
          <LoginComponent />
        </div>
      </main>
    );
  }
}

export default Login;
