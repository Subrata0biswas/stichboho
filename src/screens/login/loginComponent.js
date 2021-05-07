import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import component
import Toast from "../../components/toastMessage/toast";

class LoginComponent extends React.Component {
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
    console.log("asdf");
    Toast({
      type: "error",
      message: "res.message || res.data.message",
    });
    // const { email, password } = this.state;
    // const emailValidator = /^\w+([\D.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    // if (email.trim().length <= 0 || emailValidator.test(email) !== true) {
    //   alert("enter your valid email address.");
    // } else if (password.trim().length <= 0) {
    //   alert("enter password");
    // } else {
    // }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="contact-container cms-con">
        <h2 className="title">Log in</h2>

        <div className="msg">
          If you have an account, sign in with your email address.
        </div>
        <div className="contact-frm-outer login-outer">
          <ul>
            <li>
              <input
                type="email"
                id="#"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(evt) => this.onHandelChange(evt)}
                // style={{ zIndex: 1 }}
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
            <li className="submit-outer">
              <input
                type="submit"
                value="Sign in"
                onClick={() => this.onLogin()}
              />
              <span className="forgot-password">Forgot Password ?</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default LoginComponent;
