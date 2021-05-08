import React from "react";
import axios from "axios";
import base64 from "react-native-base64";

// import component
import Toast from "../../components/toastMessage/toast";
import { API } from "../../config/service";

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
    const { email, password } = this.state;
    const emailValidator = /^\w+([\D.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (email.trim().length <= 0 || emailValidator.test(email) !== true) {
      this.emailInput.focus();
      Toast({
        type: "info",
        message: "Enter your valid email address.",
      });
    } else if (password.trim().length <= 0) {
      this.pwdInput.focus();
      Toast({
        type: "info",
        message: "Enter your password.",
      });
    } else {
      axios
        .post(`${API}api/userlogin/`, {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log("login res", res);
          if (res.data.code === 200) {
            let user = base64.encode(
              JSON.stringify({
                id: res.data.data.id,
                firstName: res.data.data.firstname,
                lastName: res.data.data.lastname,
                email: res.data.data.email,
                mobile: res.data.data.mobile,
              })
            );
            localStorage.setItem("user", user);
            if (this.props.closeLoginModal) {
              this.props.closeLoginModal();
            }
            Toast({
              type: "success",
              message: "Successfully logged in.",
            });
          } else {
            Toast({
              type: "warning",
              message: res.data.message,
            });
          }
        })
        .catch((err) => {
          let errMsg = JSON.parse(JSON.stringify(err));
          Toast({
            type: "error",
            message: errMsg.message,
          });
        });
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="contact-frm-outer login-outer">
        <ul>
          <li>
            <input
              ref={(input) => {
                this.emailInput = input;
              }}
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
              ref={(input) => {
                this.pwdInput = input;
              }}
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
    );
  }
}

export default LoginComponent;
