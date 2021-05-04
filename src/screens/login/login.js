import React from "react";

// import component
import Toast from "../../components/toastMessage/toast";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  //   onChange input update state
  onHandelChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  onLogin = () => {
    const { email, password } = this.state;
    const emailValidator = /^\w+([\D.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim().length <= 0 || emailValidator.test(email) !== true) {
      alert("enter your valid email address.");
    } else if (password.trim().length <= 0) {
      alert("enter password");
    } else {
    }
  };

  render() {
    const { email, password } = this.state;
    console.log("email", email);
    console.log("pwd", password);
    return (
      <main>
        <div class="main-border">
          <div class="contact-container cms-con">
            <h2 class="title">Log in</h2>
            <div class="msg">
              If you have an account, sign in with your email address.
            </div>
            <div class="contact-frm-outer login-outer">
              <form action="#">
                <ul>
                  <li>
                    <input
                      type="email"
                      id="#"
                      name="email"
                      placeholder="Email"
                      value={email}
                      onChange={(evt) => this.onHandelChange(evt)}
                    />
                  </li>
                  <li>
                    <input
                      type="password"
                      id="#"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={(evt) => this.onHandelChange(evt)}
                    />
                  </li>
                  <li class="submit-outer">
                    <input
                      type="submit"
                      value="Sign in"
                      onClick={() => this.onLogin()}
                    />
                    <span class="forgot-password">Forgot Password ?</span>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
