import React from "react";
import axios from "axios";

// import component
import { API } from "../../config/service";
import Toast from "../../components/toastMessage/toast";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      phoneNo: "",
      message: "",
    };
  }

  componentDidMount() {
    this.fInput.focus();
  }

  onHandelChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  // submit contact info for contact
  submitContactUs = () => {
    const { fName, lName, phoneNo, message } = this.state;
    const num = /^[0-9\b]+$/;

    if (fName.trim().length <= 0) {
      this.fInput.focus();
      Toast({
        type: "info",
        message: "Enter your first name.",
      });
    } else if (num.test(phoneNo) !== true || phoneNo.trim().length !== 10) {
      this.phInput.focus();
      Toast({
        type: "info",
        message: "Enter your valid contact number.",
      });
    } else {
      axios
        .post(`${API}api/contact-us`, {
          firstname: fName,
          lastname: lName,
          phone: phoneNo,
          message: message,
        })
        .then((res) => {
          if (res.data.code === 200) {
            Toast({
              type: "success",
              message: "Contact created successfully.",
            });
            this.setState({
              fName: "",
              lName: "",
              phoneNo: "",
              message: "",
            });
          } else {
            Toast({
              type: "error",
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
    const { fName, lName, phoneNo, message } = this.state;

    return (
      <main>
        <div className="main-border">
          <div className="contact-container cms-con">
            <h2 className="title">Contact Us</h2>
            <div className="contact-frm-outer">
              <ul>
                <li>
                  <div className="first-name">
                    <input
                      ref={(input) => {
                        this.fInput = input;
                      }}
                      type="text"
                      id="#"
                      name="fName"
                      placeholder="Your first name.."
                      value={fName}
                      // required
                      onChange={(evt) => this.onHandelChange(evt)}
                    />
                  </div>
                  <div className="last-name">
                    <input
                      type="text"
                      id="#"
                      name="lName"
                      placeholder="Your last name.."
                      value={lName}
                      onChange={(evt) => this.onHandelChange(evt)}
                    />
                  </div>
                </li>
                <li>
                  <input
                    ref={(input) => {
                      this.phInput = input;
                    }}
                    type="tel"
                    id="#"
                    name="phoneNo"
                    placeholder="Phone number"
                    value={phoneNo}
                    minLength="10"
                    maxLength="10"
                    // required
                    onChange={(evt) => this.onHandelChange(evt)}
                  />
                </li>
                <li>
                  <textarea
                    id="subject"
                    name="message"
                    placeholder="Message.."
                    style={{ height: "200px" }}
                    value={message}
                    onChange={(evt) => this.onHandelChange(evt)}
                  ></textarea>
                </li>
                <li className="submit-outer">
                  <input type="submit" onClick={() => this.submitContactUs()} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default ContactUs;
