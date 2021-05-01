import React from "react";

class HowToPlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="cms about">
        <div class="about-us-outer">
          <div class="about-title">
            <h2 class="title">HOW TO PAY</h2>
          </div>
          <div class="container">
            <div class="about-inr-con how-to-pay-con">
              <div class="left-img img">
                <img src="assets/images/how-to-pay-left-img.jpg" alt="" />
              </div>
              <div class="con">
                <p>
                  You would be required to pay only for the fabric at our
                  representative’s visit to you
                </p>
                <p>
                  Final payment needs to be made after the trial has been
                  provided to you.{" "}
                </p>
                <p>All online modes of payments will be accepted. </p>
              </div>
            </div>
            <div class="why-stitch-buhu">
              <div class="why-title about-title">
                <h2 class="title">WHY STITCH BOHO </h2>
              </div>
              <div class="why-option">
                <div class="why-items ontime">On Time</div>
                <div class="why-items quality">Quality</div>
                <div class="why-items trust">Trust</div>
                <div class="why-items hpy-clint">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowToPlay;
