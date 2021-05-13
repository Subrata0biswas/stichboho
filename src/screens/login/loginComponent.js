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
      loginType: "userLogin",
    };
  }

  //   onChange input update state
  onHandelChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  onLogin = () => {
    const { email, password, loginType } = this.state;
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
      let apiType =
        loginType === "userLogin" ? "api/userlogin/" : "api/executive-login/";
      axios
        .post(API + apiType, {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.code === 200) {
            let user = base64.encode(
              JSON.stringify({
                id: res.data.data.id,
                firstName: res.data.data.firstname,
                lastName: res.data.data.lastname,
                email: res.data.data.email,
                mobile: res.data.data.mobile,
                type: res.data.type,
              })
            );
            localStorage.setItem("user", user);

            // redirect to dashboard or colose modal
            if (this.props.closeLoginModal) {
              this.props.closeLoginModal();
            } else if (res.data.type === "executive") {
              this.props.history.replace("/executive/dashboard");
            } else if (res.data.type === "user") {
              this.props.history.replace("/user/dashboard");
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
    const { email, password, loginType } = this.state;
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
        {this.props.closeLoginModal ? null : (
          <div onChange={(evt) => this.onHandelChange(evt)}>
            <input
              type="radio"
              name="loginType"
              value="userLogin"
              defaultChecked={true}
            />
            <div
              style={{
                display: "inline-block",
                marginLeft: 5,
                marginRight: 15,
              }}
            >
              Users Login
            </div>
            <input type="radio" name="loginType" value="executiveLogin" />
            <div style={{ display: "inline-block", marginLeft: 5 }}>
              Executive Login
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default LoginComponent;
