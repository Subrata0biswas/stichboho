import React from "react";
import axios from "axios";

// import component
import Toast from "../../components/toastMessage/toast";
import { API } from "../../config/service";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      phoneNo: "",
      email: "",
      confirmEmail: "",
      password: "",
      confirmPwd: "",
      isShowPwd: false,
    };
  }

  //   onChange input update state
  onHandelChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  createAccount = (evt) => {
    const { fName, lName, phoneNo, email, confirmEmail, password, confirmPwd } =
      this.state;
    const emailValidator = /^\w+([\D.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const num = /^[0-9\b]+$/;

    evt.preventDefault();

    if (fName.trim().length <= 0) {
      this.fInput.focus();
      Toast({
        type: "info",
        message: "Enter first name.",
      });
    } else if (num.test(phoneNo) !== true) {
      this.phNoInput.focus();
      Toast({
        type: "info",
        message: "Enter your valid contact number.",
      });
    } else if (
      email.trim().length <= 0 ||
      emailValidator.test(email) !== true
    ) {
      this.emailInput.focus();
      Toast({
        type: "info",
        message: "Enter your valid email address.",
      });
    } else if (email !== confirmEmail) {
      Toast({
        type: "info",
        message: "Email and confirm email do not match..",
      });
    } else if (password.trim().length < 0) {
      Toast({
        type: "info",
        message: "Enter password.",
      });
    } else if (password !== confirmPwd) {
      Toast({
        type: "info",
        message: "password and confirmation password do not match.",
      });
    } else {
      axios
        .post(`${API}api/registration/`, {
          firstname: fName,
          lastname: lName,
          mobile: phoneNo,
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.data.code === 200) {
            this.setState({
              fName: "",
              lName: "",
              phoneNo: "",
              email: "",
              confirmEmail: "",
              password: "",
              confirmPwd: "",
              isShowPwd: false,
            });
            Toast({
              type: "success",
              message: "Registration successfully done.",
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
    const {
      fName,
      lName,
      phoneNo,
      email,
      confirmEmail,
      password,
      confirmPwd,
      isShowPwd,
    } = this.state;
    return (
      <main>
        <div class="main-border">
          <div class="contact-container cms-con">
            <h2 class="title">Registration</h2>
            <div class="contact-frm-outer">
              <form>
                <ul>
                  <li>
                    <div class="first-name">
                      <input
                        type="text"
                        id="#"
                        name="fName"
                        placeholder="Your first name"
                        ref={(input) => {
                          this.fInput = input;
                        }}
                        value={fName}
                        onChange={(evt) => this.onHandelChange(evt)}
                      />
                    </div>
                    <div class="last-name">
                      <input
                        type="text"
                        id="#"
                        name="lName"
                        placeholder="Your last name.."
                        ref={(input) => {
                          this.lInput = input;
                        }}
                        value={lName}
                        onChange={(evt) => this.onHandelChange(evt)}
                      />
                    </div>
                  </li>
                  <li>
                    <input
                      type="tel"
                      id="#"
                      name="phoneNo"
                      placeholder="Phone number"
                      minLength="10"
                      maxLength="10"
                      ref={(input) => {
                        this.phNoInput = input;
                      }}
                      value={phoneNo}
                      onChange={(evt) => this.onHandelChange(evt)}
                    />
                  </li>
                  <li>
                    <div class="first-name">
                      <input
                        type="email"
                        id="#"
                        name="email"
                        placeholder="Email"
                        ref={(input) => {
                          this.emailInput = input;
                        }}
                        value={email}
                        onChange={(evt) => this.onHandelChange(evt)}
                      />
                    </div>
                    <div class="last-name">
                      <input
                        type="email"
                        id="#"
                        name="confirmEmail"
                        placeholder="Confirm Email"
                        ref={(input) => {
                          this.confirmEmailInput = input;
                        }}
                        value={confirmEmail}
                        onChange={(evt) => this.onHandelChange(evt)}
                      />
                    </div>
                  </li>
                  <li>
                    <div class="first-name">
                      <input
                        type="password"
                        id="#"
                        name="password"
                        placeholder="Password"
                        ref={(input) => {
                          this.passwordInput = input;
                        }}
                        value={password}
                        onChange={(evt) => this.onHandelChange(evt)}
                      />
                    </div>
                    <div class="last-name">
                      <input
                        type="password"
                        id="#"
                        name="confirmPwd"
                        placeholder="Confirm Password"
                        ref={(input) => {
                          this.confirmPwdInput = input;
                        }}
                        value={confirmPwd}
                        onChange={(evt) => this.onHandelChange(evt)}
                      />
                    </div>
                  </li>
                  <li class="chk">
                    <input
                      type="checkbox"
                      id="show-pass"
                      name="vehicle1"
                      value={isShowPwd}
                      onChange={(evt) => console.log("evttt", evt)}
                    />
                    <label for="show-pass">Show Password</label>
                  </li>
                  <li class="submit-outer">
                    <input
                      type="submit"
                      value="Creat An Account"
                      onClick={(evt) => this.createAccount(evt)}
                    />
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

export default Registration;
