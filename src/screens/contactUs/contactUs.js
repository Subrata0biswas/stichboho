import React from "react";

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div class="main-border">
          <div class="contact-container cms-con">
            <h2 class="title">Contact Us</h2>
            <div class="contact-frm-outer">
              <form action="#">
                <ul>
                  <li>
                    <div class="first-name">
                      <input
                        type="text"
                        id="#"
                        name="firstname"
                        placeholder="Your name.."
                      />
                    </div>
                    <div class="last-name">
                      <input
                        type="text"
                        id="#"
                        name="lastname"
                        placeholder="Your last name.."
                      />
                    </div>
                  </li>
                  <li>
                    <input
                      type="tel"
                      id="#"
                      name="phonenumber"
                      placeholder="Phone number"
                    />
                  </li>
                  <li>
                    <textarea
                      id="subject"
                      name="subject"
                      placeholder="Message.."
                      style={{ height: "200px" }}
                    ></textarea>
                  </li>
                  <li class="submit-outer">
                    <input type="submit" value="Submit" />
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

export default ContactUs;
